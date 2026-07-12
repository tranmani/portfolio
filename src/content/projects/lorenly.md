---
title: Lorenly
hook: Salon software you can actually switch to, because it lifts your clients, your bookings and your gift cards out of the nine systems you might be leaving.
problem: >-
  You cannot win a salon that already has four years of clients and bookings sitting
  inside a competitor's product. The switching cost is the whole market, so the import has
  to be good enough to be the reason they move. That means nine export formats, each with
  its own column names and date formats, duplicate clients spelled three ways, bookings
  pointing at services that no longer exist, and gift card balances that have to survive
  the move exactly, because that money is a liability the salon still owes somebody.
role: Solo. Product, platform, mobile app, infrastructure.
year: 2026
order: 3
stack: ["Next.js", "Cloudflare Workers", "Supabase", "Expo"]
figure:
  value: "9 → 1"
  label: "competing booking systems, normalised into one schema"
links:
  - label: lorenly.com
    href: https://lorenly.com
proof:
  - "Imports clients, past bookings and gift card balances from 9 competing booking systems"
  - "Multi tenant on one shared Postgres schema, tenants resolved per request from the Host header inside the Worker"
  - "Next.js on Cloudflare Workers through OpenNext, with an inline editable site and an Expo app per tenant"
---

Booking, client records, gift cards, payments, and a website for each business. The
product surface is ordinary. The thing that decides whether any of it gets used is the
door.

## The importer is the door

A salon owner does not evaluate booking software on features. They evaluate it on whether
the four years of client history they are sitting on survives the move. If the answer is
export a CSV and retype it, the answer is no, and no feature built afterwards changes
that.

So the import reads nine competing systems, and each one is its own small hostile world.
Different column names, different date formats, the same client spelled three ways across
three years, bookings that reference services which no longer exist, and gift cards whose
balances have to land exactly right, because an unredeemed gift card is money the salon
still owes a person who is going to walk in and ask for it.

The work is normalisation, deduplication, and being repeatable enough that a run which
dies halfway can be run again without charging anybody twice. It is not glamorous
engineering. It is the reason a salon can say yes.

## Multi tenant without a database per tenant

One shared Postgres schema. The tenant is resolved per request from the Host header
inside the Worker, and Next.js runs on Cloudflare Workers through OpenNext. Each tenant
gets a site they edit inline, in place, on the page, rather than through a form that
describes the page.

## One schema, and the guarantee I would move into the database

A shared schema is cheap to run and it concentrates the risk in one place: every tenant
lives in the same tables, so isolation has to be enforced on every path that touches
them. Row level security pushes that guarantee down into Postgres, where it holds whether
or not the person writing the next query remembers it, and that is the change I would
make before this platform carries an order of magnitude more salons. The cheaper model
was the right way to find out whether salons would switch at all. It is not the model I
would scale on.
