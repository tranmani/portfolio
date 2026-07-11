---
title: An agent that refuses to answer
hook: Retrieval grounded in an organisation's vetted claims, with citations, a clearance boundary, and the right to say no.
problem: >-
  When the corpus is an organisation's vetted claims, a hallucination is not a UX
  glitch, it is a compliance failure. And retrieval leaks: a reader must never receive
  a passage from a document above their clearance, not even summarised, not even
  paraphrased into an answer that sounds harmless.
role: AI Engineer at Studio WIP
year: 2026
order: 2
stack: ["TypeScript", "Postgres + pgvector", "Anthropic API", "Next.js"]
links: []
proof:
  - Answers cite the source document and line range, or the agent declines
  - Retrieval filtered server side by role, collection and document clearance
  - Escalation attempts are detected and written to an audit log
---

Studio WIP is an impact venture studio. It runs on documents: research, evidence,
interviews, the things a venture has actually established to be true. The agent's job is
to let a person interrogate that body of work without it quietly inventing the parts it
does not have.

## Grounding is a contract, not a prompt

Documents are parsed, chunked and embedded locally into Postgres with pgvector. No
passage, no answer. When the knowledge base cannot support a claim the agent says so
instead of reaching for the model's own priors, and every answer it does give cites the
document and the line range it came from, so a reader can go and check.

The interesting part is not making it answer. It is making it decline, reliably, and
making declining feel like the system working rather than the system failing.

## The clearance boundary is enforced in the database, not the prompt

Each document carries a sensitivity level. Each role carries a clearance, a collection
allowlist, and a feature allowlist. The filter runs server side, in the query, before
any text reaches the model, because a boundary a prompt is asked politely to respect is
not a boundary.

When a reader tries to reach material above their clearance, the system does not just
refuse. It records the attempt. A retrieval system that silently declines teaches you
nothing about who is probing it.

*Built at Studio WIP. Described here at the level of the pattern rather than the corpus.*
