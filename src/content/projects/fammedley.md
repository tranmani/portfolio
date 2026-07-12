---
title: FamMedley
hook: A family organiser that works with no signal at all, because the sync queue collapses itself before it ever reaches the network.
problem: >-
  Every device mutates the same shared state, and half of them are offline when they do
  it. A list edited on the train and the same list edited in the shop have to converge on
  reconnect without duplicating rows, dropping the queue, or resurrecting something a
  person deleted. The expensive answer is a merge engine. The question is whether a family
  shopping list is worth one.
role: Solo. Go API, Expo app, sync engine, infrastructure.
year: 2026
order: 4
stack: ["Go", "Expo", "SQLite", "PostgreSQL"]
status: On the App Store since May 2026.
cover: ../../assets/projects/fammedley.png
coverAlt: The FamMedley family coordination platform landing page.
links:
  - label: fammedley.com
    href: https://fammedley.com
  - label: App Store
    href: https://apps.apple.com/us/app/fammedley-family-organizer/id6761373489
proof:
  - "Every device owns a SQLite database of 9 tables, mirroring 7 of the server's 50, so the UI never waits on the network"
  - "Writes land locally, queue in an outbox, and replay when the connection returns"
  - "The queue collapses before it is sent: one mutation per entity, delete always wins, and a check then uncheck never leaves the phone"
  - "The server applies the whole batch in a single Postgres transaction, so there is no half applied sync to reconcile"
---

A shared brain for a household: lists, plans, a whiteboard, where everyone is. The
features are easy to describe. The hard part is invisible, which is the usual shape of
this kind of product.

## The queue is the engine

Each device holds its own SQLite database and the UI reads only from it, so the app works
in a basement. Every write also appends a row to an outbox table: an identifier generated
on the device, the entity type, the action, a JSON payload, and a client timestamp.

A sync fires two seconds after the last edit, on foreground, or the moment connectivity
returns. Before anything is sent, the queue collapses, and that is where the work is. All
pending mutations for one entity fold into exactly one. Consecutive updates merge their
payloads. A create stays a create even if it is edited afterwards. A delete beats
everything. And a net zero toggle, checking a shopping item and then unchecking it,
disappears without ever reaching the network. If the collapse leaves nothing, no request
is made at all.

Replay turns out to be safe without an idempotency key. The identifiers are generated on
the device, writes are find then create or update, and the outbox is cleared only after
the server returns 200. The batch applies inside one Postgres transaction, so a sync
either happened or it did not.

## Row level last write wins, and the point where I would replace it

Conflicts resolve as last write wins at the level of the row. Each mutation carries a
client timestamp, and if the row on the server has been touched more recently, the
mutation is dropped. Not merged, not partially applied, not rejected loudly. Dropped,
whole, in silence.

So this can happen. You edit a task's title on the train at ten. Someone else changes
that task's colour at five past, online. You reconnect, your timestamp loses, and your
title is gone, even though the two of you never touched the same field. A field level
merge would have kept both. A row does not know what a field is.

It is a deliberate trade rather than an oversight. Per field timestamps, or CRDTs, cost
more to build and more to reason about than a household shopping list is worth, and the
lost edit is rare. But it is the first thing I would rewrite if this app ever grew a
document, or anything two people edit at once on purpose, because at that point last
write wins stops being thrift and starts being data loss.
