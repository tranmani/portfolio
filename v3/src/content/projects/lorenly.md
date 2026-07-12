---
title: Lorenly
hook: Salon software you can actually switch to, because it imports your history out of the nine systems you might be leaving.
problem: >-
  You cannot win a salon that already has four years of clients and bookings sitting
  inside a competitor's product. The switching cost is the whole market, so the import
  has to be good enough to be the reason they move. That means nine export formats,
  each with its own column names, date formats, duplicate clients spelled three ways,
  bookings pointing at services that no longer exist, and gift card balances that do
  not reconcile.
role: Solo. Product, platform, mobile app, infrastructure.
year: 2026
order: 3
stack: ["Next.js", "Cloudflare Workers", "Supabase", "Expo"]
cover: ../../assets/projects/lorenly.png
coverAlt: The Lorenly booking platform landing page.
links:
  - label: lorenly.com
    href: https://lorenly.com
proof:
  - One click import of clients, bookings, services and gift cards from 9 booking systems
  - Multi tenant on a shared Postgres schema, resolved by host at the edge
  - Every tenant gets an inline editable site and an Expo companion app
---

Booking, client records, gift cards, payments, and a website per business. The product
surface is ordinary. The thing that makes it winnable is the door.

## The importer is the product

A salon owner does not evaluate booking software on features. They evaluate it on whether
the four years of client history they are sitting on survives the move. If the answer is
"export a CSV and retype it", the answer is no, and no feature you build later will
change that.

So the import runs from nine competing systems, and each one is its own small hostile
world: different column names, different date formats, duplicate clients spelled three
ways, bookings that reference services that no longer exist, gift cards with balances that
do not reconcile. The work is normalisation, deduplication, and being idempotent enough
that a run which dies halfway can be run again without doubling somebody's revenue.

That is not glamorous engineering. It is the reason a salon can say yes.

## Multi tenant without a database per tenant

One shared Postgres schema, tenants resolved from the request host at the edge, running
Next.js on Cloudflare Workers through OpenNext. Each tenant gets a site they can edit
inline, in place, on the page, rather than through a form that describes the page.

## What it costs

A shared schema means a shared blast radius. One tenant's runaway query is every
tenant's slow afternoon, and a migration that is wrong is wrong for all of them at once,
which is a real operational bill I pay for not running a database per salon. It is the
right trade at this size and it is the first thing that breaks at ten times this size.
