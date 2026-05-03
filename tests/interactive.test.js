import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mkdirSync, rmSync, writeFileSync, mkdtempSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { tmpdir } from 'os'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let testDir

beforeEach(() => {
  testDir = mkdtempSync(join(tmpdir(), 'security-skill-interactive-'))
  vi.spyOn(console, 'log').mockImplementation(() => {})
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  rmSync(testDir, { recursive: true, force: true })
  vi.restoreAllMocks()
})

// ── scanStack ──────────────────────────────────────────────────────────────

describe('scanStack', () => {
  it('returns unknown language for empty directory', async () => {
    const { scanStack } = await import('../interactive.js')
    const info = scanStack(testDir)
    expect(info.language).toBe('Unknown')
    expect(info.framework).toBeNull()
    expect(info.database).toBeNull()
    expect(info.deployment).toBeNull()
    expect(info.aiTools).toEqual([])
  })

  it('detects TypeScript from tsconfig.json', async () => {
    const { scanStack } = await import('../interactive.js')
    writeFileSync(join(testDir, 'tsconfig.json'), '{}')
    const info = scanStack(testDir)
    expect(info.language).toContain('TypeScript')
  })

  it('detects Next.js from package.json dependencies', async () => {
    const { scanStack } = await import('../interactive.js')
    writeFileSync(join(testDir, 'package.json'), JSON.stringify({
      dependencies: { next: '^14.0.0' }
    }))
    const info = scanStack(testDir)
    expect(info.framework).toContain('Next.js')
  })

  it('detects Supabase from supabase/ directory', async () => {
    const { scanStack } = await import('../interactive.js')
    mkdirSync(join(testDir, 'supabase'))
    const info = scanStack(testDir)
    expect(info.database).toBe('Supabase')
  })

  it('detects Vercel from vercel.json', async () => {
    const { scanStack } = await import('../interactive.js')
    writeFileSync(join(testDir, 'vercel.json'), '{}')
    const info = scanStack(testDir)
    expect(info.deployment).toBe('Vercel')
  })

  it('detects Docker from Dockerfile', async () => {
    const { scanStack } = await import('../interactive.js')
    writeFileSync(join(testDir, 'Dockerfile'), 'FROM node:20')
    const info = scanStack(testDir)
    expect(info.deployment).toBe('Docker')
  })
})

// ── mapAnswersToCategories ─────────────────────────────────────────────────

describe('mapAnswersToCategories', () => {
  it('always includes all 10 core baseline categories', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const ALWAYS_ON = [
      '00-stack-detection', '01-secrets-management', '05-cryptography',
      '08-deployment-security', '12-injections', '21-source-code-analysis',
      '25-modern-security', '26-scoring-system', '27-incident-response', '28-memory-system'
    ]
    const result = mapAnswersToCategories({ projectType: 'cli', infrastructure: [], features: [], compliance: [], hardening: [] })
    for (const cat of ALWAYS_ON) {
      expect(result).toContain(cat)
    }
  })

  it('adds web categories for web project type', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'web', infrastructure: [], features: [], compliance: [], hardening: [] })
    expect(result).toContain('02-network-protection')
    expect(result).toContain('03-security-headers')
    expect(result).toContain('04-auth-sessions')
  })

  it('adds docker category when docker infrastructure selected', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'cli', infrastructure: ['docker'], features: [], compliance: [], hardening: [] })
    expect(result).toContain('09-docker-security')
  })

  it('adds serverless category when serverless selected', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'web', infrastructure: ['serverless'], features: [], compliance: [], hardening: [] })
    expect(result).toContain('20-serverless-edge')
  })

  it('adds database categories when database feature selected', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'web', infrastructure: [], features: ['database'], compliance: [], hardening: [] })
    expect(result).toContain('07-database-security')
    expect(result).toContain('13-race-conditions')
  })

  it('adds AI/LLM category when ai feature selected', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'web', infrastructure: [], features: ['ai'], compliance: [], hardening: [] })
    expect(result).toContain('22-ai-llm-security')
  })

  it('adds GDPR category when gdpr compliance selected', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'web', infrastructure: [], features: [], compliance: ['gdpr'], hardening: [] })
    expect(result).toContain('18-compliance-gdpr')
  })

  it('deduplicates overlapping category activations', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'web', infrastructure: [], features: ['auth'], compliance: [], hardening: [] })
    expect(result.filter(c => c === '04-auth-sessions')).toHaveLength(1)
  })

  it('returns sorted array', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'web', infrastructure: ['docker', 'serverless'], features: ['database', 'auth', 'ai'], compliance: ['gdpr'], hardening: ['supplyChain'] })
    expect(result).toEqual([...result].sort())
  })

  it('mobile project type activates mobile-security', async () => {
    const { mapAnswersToCategories } = await import('../interactive.js')
    const result = mapAnswersToCategories({ projectType: 'mobile', infrastructure: [], features: [], compliance: [], hardening: [] })
    expect(result).toContain('17-mobile-security')
  })
})
