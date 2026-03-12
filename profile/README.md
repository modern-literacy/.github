# Modern Literacy

Modern Literacy builds **AIDEN** for **governed AI review workflows**. The public shape is intentionally small: a stakeholder-facing demo and an authoritative engine.

## Start Here
1. Open [`modern-literacy/aiden-demo`](https://github.com/modern-literacy/aiden-demo) for the stakeholder-facing surface. It runs directly in the browser for deterministic mode and can point at the engine for live assist.
2. Open [`modern-literacy/aiden-engine`](https://github.com/modern-literacy/aiden-engine) for the authoritative deterministic core, bounded live assist, contracts, and engine-owned policy pack.

## Public Product Shape
- `aiden-demo` — public interaction surface
- `aiden-engine` — runtime, contracts, policy pack, and deterministic fallback

## Modes
- **Deterministic** — authoritative baseline
- **Live Assist** — visible bounded assistive path with fallback and escalation

## Responsible AI controls
- no autonomous writes
- no open-web browsing
- human review required
- deterministic fallback available
- bounded tool allowlist enforced
- trace redaction enforced

Archived repositories are retained only for history and are not part of the public path.

Security-sensitive concerns should follow the reporting path in [`SECURITY.md`](../SECURITY.md).
