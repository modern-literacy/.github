# Modern Literacy

Modern Literacy builds **AIDEN**, an internal engineering pre‑review gate.

AIDEN helps internal engineering teams turn rough AI proposals into review‑ready packets by finding missing evidence early, generating the few architecture views reviewers need, and issuing a deterministic pre‑review recommendation before a human decision.

## Scope
- **One use case:** internal **AI code review assistant** for engineering workflow / CI‑CD.
- **Human review required:** AIDEN never replaces the human gate.
- **Deterministic baseline:** the authoritative recommendation is deterministic; assistive modes explain and draft, but do not overwrite authority.

## Public contract (3 promises)
1. It shows what is missing before human review.
2. It gives reviewers only the evidence that matters.
3. It never replaces the human gate.

Control language that stays visible:
- Human review required.
- Deterministic baseline is authoritative.
- Deterministic fallback is available.

## Start here
1. Open [`modern-literacy/aiden-demo`](https://github.com/modern-literacy/aiden-demo) for the 90‑second walkthrough (authoring help → reviewer prep → deterministic baseline → human handoff).
2. Open [`modern-literacy/aiden`](https://github.com/modern-literacy/aiden) for the golden-path artifacts and canonical messaging.
3. Open [`modern-literacy/aiden-engine`](https://github.com/modern-literacy/aiden-engine) to inspect the deterministic contract and evidence outputs.

## Implementation (appendix)
AIDEN is implemented across multiple repos (engine, demo, policies, tools). Repo topology and viewpoint diagrams live in the hub repo architecture docs; they are not the front‑door story.

Security-sensitive concerns should follow the reporting path in [`SECURITY.md`](../SECURITY.md).
