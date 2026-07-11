---
title: FamMedley
hook: Family coordination that keeps working with no signal, and reconciles without losing anybody's edit.
problem: >-
  Every device in a family mutates the same shared state, and half of them are offline
  when they do it. A shopping list edited on the train and a shopping list edited in the
  shop have to converge into one list on reconnect, without duplicating, dropping or
  reordering what either person actually did.
role: Solo. Go API, Expo app, sync engine, infrastructure.
year: 2026
order: 4
stack: ["Go", "Expo", "SQLite", "PostgreSQL"]
cover: ../../assets/projects/fammedley.png
coverAlt: The FamMedley family coordination platform landing page.
links:
  - label: fammedley.com
    href: https://fammedley.com
  - label: App Store
    href: https://apps.apple.com/us/app/fammedley-family-organizer/id6761373489
proof:
  - Live on the App Store since May 2026
  - "Offline first: SQLite on device, mutation queue, replay on reconnect"
  - Go API on GCP, shipped through containerised CI
---

A shared brain for a household: lists, plans, a whiteboard, where everyone is. The
features are easy to describe and the hard part is invisible, which is the usual shape of
this kind of product.

## The sync engine is the whole thing

The app is offline first, which is a nice phrase for a genuinely nasty problem. Every
device holds a local SQLite database and mutates it freely, whether or not there is a
network. Those mutations go into a queue. On reconnect the queue replays against the
server.

The queue is where the difficulty lives, not the network call. Two people adding milk
should end up with one milk. A person who edits and then deletes should not have the edit
resurrect the row. A queue that replays naively will happily duplicate, and one that
collapses too aggressively will silently eat somebody's change, which is worse, because a
lost edit does not announce itself.

So mutations are deduplicated and collapsed before they are sent, ordered so that a
delete cannot be overtaken by the update it supersedes, and made idempotent so a replay
that half succeeded can be replayed again safely.

## What it cost

Being honest about the trade off: conflicts resolve last write wins at field level. That
is the right call for a shopping list and the wrong call for a document, and if this
product ever grows a document, the sync engine gets rewritten rather than stretched.
