# Modern Literacy

Modern Literacy builds AIDEN for governed AI review workflows. The public shape is intentionally small: a stakeholder‑facing demo and an authoritative engine.

### Start Here

1. Open modern-literacy/aiden-demo for the stakeholder‑facing surface. It runs directly in the browser for deterministic mode and can point at the engine for live assist.
1. Open modern-literacy/aiden-engine for the authoritative deterministic core, bounded live assist, contracts, and engine‑owned policy pack.

### Public Product Shape
- aiden-demo — public interaction surface
- aiden-engine — runtime, contracts, policy pack, and deterministic fallback

### Modes
- Deterministic — authoritative baseline
- Live Assist — visible bounded assistive path with fallback and escalation

### Responsible AI controls
- no autonomous writes
- no open‑web browsing
- human review required
- deterministic fallback available
- bounded tool allowlist enforced
- trace redaction enforced

Archived repositories are retained only for history and are not part of the public path.

Security-sensitive concerns should follow the reporting path in SECURITY.md.

### Architecture Overview

Below is a high‑level overview of AIDEN’s pre‑review workflow. This diagram mirrors the single‑agent pattern shown in OpenAI’s “A Practical Guide to Building Agents” and reflects the simplified public shape of the system.

```

     ┌──────────────────────┐
     │  Proposal / Input    │
     └─────────┬────────────┘
               │
               v
      ┌─────────────────────┐
      │  aiden-demo (UI)    │
      └─────────┬───────────┘
               │
               v
    ┌──────────────────────────┐
    │  aiden-engine (core)     │
    │  - deterministic gate    │
    │  - policy evaluation     │
    │  - evidence generation   │
    └────────────┬────────────┘
               │
               v
    ┌──────────────────────────┐
    │ Assistive surfaces       │
    │  - Author assist         │
    │  - Reviewer assist       │
    └────────────┬────────────┘
               │
               v
      ┌─────────────────────┐
      │  Human review gate   │
      └─────────────────────┘

```

How it works: A proposal (such as a draft internal AI tool description) is submitted through the demo UI. The core engine evaluates the proposal deterministically against the declared policy packs and generates evidence. The assistive surfaces provide context and remediation suggestions to the author and reviewer. A human reviewer makes the final decision to approve or request changes. This ensures that the assistive AI remains bounded and that human oversight is explicit.