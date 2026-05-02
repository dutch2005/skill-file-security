<div align="center">

```
███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗██╗   ██╗
██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝
███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║    ╚████╔╝ 
╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║     ╚██╔╝  
███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║      ██║   
╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝   
                         🔐 S K I L L
```

**Your AI coding assistant just became a security engineer.**

🌐 **[Visit the Official Website](https://skill-file-security-website.vercel.app)**

[![npm](https://img.shields.io/npm/v/skill-file-security?color=red&label=npm)](https://www.npmjs.com/package/skill-file-security)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![OWASP Top 10](https://img.shields.io/badge/OWASP-Top%2010%20✓-red)](https://owasp.org/Top10/)
[![CWE Top 25](https://img.shields.io/badge/CWE-Top%2025%20✓-orange)](https://cwe.mitre.org/top25/)
[![ASVS Level 3](https://img.shields.io/badge/ASVS-Level%203%20✓-blue)](https://owasp.org/asvs)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

---

## Install it. Right now.

```bash
npx @netxeo/security-skill
```

That's it. Run this in any project. Then type `/security-scan` in your AI.

---

## What just happened?

```
📦 Installing security-skill...

  ✅ Skill files installed → .skills/security/
  ✅ memory-security.md created
  ✅ .gitignore updated (6 security entries added)

  Configuring AI assistants...
  ✅ CLAUDE.md created              ← Claude / Antigravity
  ✅ AGENTS.md created              ← OpenAI Codex CLI
  ✅ GEMINI.md created              ← Gemini Code Assist
  ✅ .cursorrules created           ← Cursor
  ✅ .cursor/rules/security.mdc     ← Cursor (new format)
  ✅ .windsurfrules created         ← Windsurf
  ✅ .clinerules created            ← Cline
  ✅ .github/copilot-instructions.md ← GitHub Copilot+
  ✅ .continue/config.yaml created  ← Continue.dev

  ⚡ Run /security-scan in your AI to get started!
```

Your AI now knows 25 security categories. It will flag vulnerabilities **while you code**, not after.

---

## See it in action

```
You: /security-audit

╔══════════════════════════════════════════════════╗
║      🔐  SECURITY AUDIT — myproject              ║
║         Stack: Next.js · Supabase · Vercel        ║
╠══════════════════════════════════════════════════╣
║                                                   ║
║  SECURITY SCORE  :  61 / 100  🟠                  ║
║                                                   ║
╠══════════════════════════════════════════════════╣
║  🔴  Secrets & Files          12/20  ← FIX NOW   ║
║  🟢  Auth & Sessions          16/20              ║
║  🔴  Database (Supabase RLS)   8/20  ← FIX NOW   ║
║  🟡  HTTP Headers             12/20              ║
║  🟢  Source Code              18/20              ║
║  ...  20 more categories...                       ║
╠══════════════════════════════════════════════════╣
║  🔴 2 critical  🟠 3 high  🟡 4 medium           ║
╚══════════════════════════════════════════════════╝

🔴 CRITICAL #1 — Supabase service role key in frontend code
   Found: NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY in .env.local
   Risk:  Full database access exposed to browser
   Fix:   /security-fix supabase-key

🔴 CRITICAL #2 — RLS disabled on 3 tables
   Found: users, orders, messages (no row-level security)
   Risk:  Any authenticated user can read all data
   Fix:   /security-fix rls

📄 Full report → security-report.md
```

---

## Commands

| Command | What it does |
|---|---|
| `/security-scan` | 30-second scan, critical issues only |
| `/security-audit` | Full audit + score /100 + report file |
| `/security-fix` | Applies fixes — always asks before touching code |
| `/security-status` | Score history from `memory-security.md` |
| `/security-incident` | Full incident response playbook |

---

## Coverage

> **100% of OWASP, 100% of CWE Top 25 — without installing a single extra tool.**

<details>
<summary>📋 CWE Top 25 — Full list</summary>

| # | CWE | What we check |
|---|---|---|
| 1 | CWE-787 Out-of-bounds Write | Buffer.alloc(), safe allocation |
| 2 | CWE-79 XSS | textContent vs innerHTML, CSP nonces |
| 3 | CWE-89 SQL Injection | Parameterized queries everywhere |
| 4 | CWE-416 Use After Free | Event listener cleanup, memory lifecycle |
| 5 | CWE-78 OS Command Injection | execFile() with argument arrays |
| 6 | CWE-20 Improper Input Validation | Allowlists, schema validation (Zod) |
| 7 | CWE-125 Out-of-bounds Read | Buffer bounds, user-controlled sizes |
| 8 | CWE-22 Path Traversal | Path normalization, filename sanitization |
| 9 | CWE-352 CSRF | SameSite cookies + Sec-Fetch headers |
| 10 | CWE-434 Unrestricted Upload | MIME from bytes, size limits, web root |
| 11 | CWE-862 Missing Authorization | All routes checked for auth middleware |
| 12 | CWE-476 NULL Pointer Dereference | Null safety patterns on DB results |
| 13 | CWE-287 Improper Authentication | bcrypt cost, timing attacks, lockout |
| 14 | CWE-190 Integer Overflow | Price/quantity bounds validation |
| 15 | CWE-502 Deserialization | pickle.loads, yaml.load → safe_load |
| 16 | CWE-77 Command Injection | No shell: true, no string commands |
| 17 | CWE-119 Buffer Overflow | Buffer.alloc vs new Buffer |
| 18 | CWE-798 Hard-coded Credentials | Secret scanning in all files |
| 19 | CWE-918 SSRF | URL allowlist before any fetch() |
| 20 | CWE-306 Missing Auth Check | Route-level auth middleware scan |
| 21 | CWE-362 Race Condition | Atomic ops, distributed locks |
| 22 | CWE-269 Privilege Mismanagement | Least privilege, no root in Docker |
| 23 | CWE-94 Code Injection | No eval(), new Function(), dynamic require |
| 24 | CWE-863 Incorrect Authorization | Ownership check on every resource |
| 25 | CWE-276 Incorrect Permissions | File/DB/container permissions |

</details>

<details>
<summary>📋 OWASP Coverage — 7 lists</summary>

- ✅ **OWASP Web Top 10** (2025)
- ✅ **OWASP API Security Top 10**
- ✅ **OWASP Mobile Top 10**
- ✅ **OWASP LLM/AI Top 10**
- ✅ **OWASP Docker Top 10**
- ✅ **OWASP Serverless Top 10**
- ✅ **OWASP Cloud-Native Top 10**

</details>

<details>
<summary>📋 All 25 security categories</summary>

```
01  Secrets & Files         08  Deployment & CI/CD     15  DNS & Email
02  Network & CORS          09  Docker Security         16  Supply Chain
03  HTTP Headers            10  Protocols (GQL/WS)      17  Mobile Security
04  Auth & Sessions         11  Advanced Attacks        18  Compliance & GDPR
05  Cryptography            12  All Injections          19  Monitoring & Honeytokens
06  JWT Security            13  Race Conditions         20  Serverless & Edge
07  Database Security       14  File Upload             21  Source Code Analysis
                                                        22  AI/LLM Security
                                                        23  Bot & DDoS
                                                        24  Browser APIs
                                                        25  Modern Security
```

</details>

---

## Compatible with your AI

Works out-of-the-box with every major AI coding assistant. No manual setup.

| AI Assistant | Auto-configured via |
|---|---|
| Claude / Antigravity | `CLAUDE.md` |
| Cursor | `.cursorrules` + `.cursor/rules/security.mdc` |
| GitHub Copilot+ | `.github/copilot-instructions.md` |
| Windsurf | `.windsurfrules` |
| Cline | `.clinerules` |
| OpenAI Codex CLI | `AGENTS.md` |
| Continue.dev | `.continue/config.yaml` |
| Aider | `.aider.conf.yml` |
| Gemini Code Assist | `GEMINI.md` |

---

## How it works

```
1.  npx skill-file-security
    └─ installs 29 security instruction files to .skills/security/
    └─ creates memory-security.md (tracks your score over time)
    └─ creates AI config files for every assistant on your machine
    └─ hardens .gitignore

2.  /security-scan
    └─ AI reads skill.md
    └─ auto-detects your stack (Next.js? Express? Docker? Firebase?)
    └─ runs the right checks for YOUR specific setup
    └─ gives you a prioritized list, most critical first

3.  /security-fix
    └─ shows you the diff
    └─ always asks before modifying anything
    └─ zero breaking changes guaranteed
```

---

## What developers say after their first scan

> *"Found a Supabase RLS misconfiguration that would have exposed all user data."*

> *"Caught a hardcoded OpenAI key that was about to go to production."*

> *"Finally understand what CSP headers actually do."*

---

## Philosophy

**🔧 Non-destructive** — Never auto-applies changes. You approve every fix.

**📚 Educational** — Every issue comes with an explanation and context.

**⚡ Zero setup** — No config, no API keys, no cloud service. Pure AI instructions.

**🔄 Living memory** — `memory-security.md` tracks your score across sessions.

**🌍 Stack-agnostic** — Works on Next.js, Express, Django, Laravel, Rails, Spring Boot, and more.

---

## Security Score

After your first audit, your score lives in `memory-security.md`:

```
| Date       | Score  | Critical | High | Notes              |
|------------|--------|----------|------|--------------------|
| 2025-05-01 | 61/100 | 2        | 3    | First audit        |
| 2025-05-03 | 84/100 | 0        | 1    | Fixed RLS + secret |
| 2025-05-10 | 97/100 | 0        | 0    | 🟢 Excellent        |
```

---

## Contributing

Found a missing vulnerability pattern? Open a PR.

The skill is 29 Markdown files. No build step. No TypeScript. Just knowledge.

```
instructions/
├── 01-secrets-management.md
├── 07-database-security.md
├── 22-ai-llm-security.md
└── ... 26 more
```

---

## License

MIT — free forever.

---

<div align="center">

**[⭐ Star this repo](https://github.com/Netxeo/security-skill)** if it helped you catch a bug before production.

*Covers: CWE Top 25 · OWASP Top 10 (7 lists) · ASVS Level 1-2-3*

</div>
