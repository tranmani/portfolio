---
title: An agent that declines
hook: Retrieval over an organisation's vetted claims, where every chunk clears four access checks before the model sees it, and the failures are the intrusion signal.
problem: >-
  When the corpus is an organisation's vetted claims, a hallucination is a compliance
  failure rather than a UX glitch. And retrieval leaks: a reader must never receive a
  passage from a document above their clearance, not summarised, not paraphrased, not
  quietly folded into an answer that sounds harmless.
role: "AI Engineer at Studio WIP. Solo: retrieval, chat, admin, evals, ingestion, deployment."
year: 2026
order: 2
stack: ["TypeScript", "Next.js", "Postgres + pgvector", "Transformers.js", "Claude"]
figure:
  value: "4"
  label: "independent access checks every chunk clears before the model is shown it: clearance, collection, company, department"
links: []
proof:
  - "Documents are parsed, chunked at 1200 characters with 150 of overlap, and embedded on the box with a local 384 dimension model. No text leaves for a third party embedder"
  - "Retrieval is hybrid: pgvector cosine and Postgres full text, fused with reciprocal rank, capped at three hits per file"
  - "Citations carry a real line range, recovered by locating each chunk back in the source, and the reader can open the document at exactly that range"
  - "Denied chunks that scored highly are written to an audit log as an access attempt, with the failing dimension named"
---

Studio WIP is an impact venture studio. It runs on documents: research, evidence,
interviews, the things a venture has actually established to be true. The agent lets a
person interrogate that body of work without quietly inventing the parts it does not
have.

I built the whole surface, and most of it is the surface you would expect: multi user chat,
shared sessions, collections, an ingestion queue, an admin dashboard for roles and
documents, an eval harness, a containerised deploy. None of that is why the project is
interesting. The rest of this is about the one decision inside it that was not obvious, and
about which of its guarantees are real.

## The query is deliberately not filtered

The obvious way to enforce a clearance boundary is to put it in the `WHERE` clause. This
one does not. Both retrieval queries, the vector search and the full text search, run
unrestricted, and the access rules are applied afterwards in one pure function that is
exhaustively unit tested: clearance level, collection allowlist, company, department.
Four checks, and a chunk has to survive all of them before its text is ever placed in
front of the model.

It looks like the weaker design and it is the reason the interesting thing works. Because
the candidate pool is unfiltered, the system can see the difference between what *matched*
the question and what the reader is *allowed to read*. That difference is a signal. A
denied chunk that scored above 0.45 cosine, or landed in the top three of the text search,
is not a coincidence: somebody has asked a question shaped like a document they cannot
open. The system records it as an access attempt, names the dimension that failed, and an
admin can go from the audit entry straight to the conversation that produced it.

Filter in the query and you get the same safety and you are blind. You cannot log what you
never retrieved.

## Citations you can land on

A chunk keeps the line range it came from, recovered by locating the piece back inside the
original text rather than guessed at. So a citation is not a document name, it is a place:
the reader clicks it and the source opens at those lines. Tables cite a row range. PDFs
cite a page.

## What is actually enforced, and what is asked

I want to be exact here, because it is the difference between a guarantee and a habit.

The clearance boundary is **enforced in code**. There is no prompt on earth that will
persuade the agent to cite a document it was never handed, because a boundary a prompt is
asked politely to respect is not a boundary.

Grounding and refusal are **asked for in the prompt**. The answerability gate, the rule
against answering from the model's own priors, the requirement to cite: those are
instructions, and instructions are followed most of the time rather than always. So I grade
it. A sample of real turns is scored for groundedness and citation validity, and the score
goes on the admin dashboard rather than into a slide.

The first honest reading was groundedness 0.70 and citation validity 0.64. That number is
low, and chasing it turned out to be more interesting than the number itself: the grader
was resolving citations against the whole knowledge base rather than against the evidence
that particular answer had actually been shown, so it was marking good citations wrong. It
now grades against the turn's real evidence. Measuring the agent honestly first meant
fixing the instrument before the agent.

The eval suite is where refusal is held in place: cases that must decline, and, just as
importantly, nineteen assertions that must *not* decline. Over-refusal is the real cost of
a system tuned to say no, and it is easy to tune the pendulum too far and end up with an
agent that is useless and technically correct. Those nineteen cases are what stop me doing
that quietly.
