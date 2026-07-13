---
title: Perron
hook: A chat room for a station that only opens while you are actually at it, and closes behind you when you leave.
problem: >-
  Presence is the product, and presence is the thing a phone is worst at proving.
  A roofed station blocks GNSS, so the fix falls back to Wi-Fi and cell triangulation
  and lands tens to hundreds of metres off. Tighten the fence to make it mean something
  and you lock out the traveller standing on the platform, who is precisely the person
  the app is for.
role: Solo. Design, mobile app, backend, infrastructure.
year: 2026
order: 1
stack: ["Expo", "TypeScript", "Cloudflare Workers", "GTFS-RT"]
figure:
  value: "250 m"
  label: "the geofence, and it is a deliberate error in one direction"
links:
  - label: perron.thenextbeacon.com
    href: https://perron.thenextbeacon.com
proof:
  - "250 m geofence around the station, sized to admit someone on the pavement rather than reject a real traveller standing indoors"
  - "Spoofing bounded by a 300 km/h travel plausibility check between fixes, which stops casual teleportation and nothing stronger"
  - "Train rooms use a 2 km radius, because a live train position is an estimate between stations that can be 30 km apart"
  - "Built on open CC0 feeds, so it covers every operator on the Dutch network rather than one carrier"
---

Waiting for a train is dead time, and everyone standing around you is waiting too.
Perron opens an anonymous room for the people actually at your station, right now.
Arrive and the room opens. Leave and it closes behind you.

## Why the fence is 250 metres and not thirty

The romantic version of this app gates each platform separately. The phone cannot do it.
Under a canopy or below ground the GNSS fix is gone and the device falls back to Wi-Fi
and cell triangulation, accurate to somewhere between tens and hundreds of metres. Two
platforms are twelve metres apart. There is no honest way to tell them apart from a
consumer handset, so the room is the station, not the platform.

The radius is a deliberate error in one direction. At 250 metres it will sometimes admit
somebody standing on the pavement outside, and that is the trade I want. Letting in a
person who is nearly there costs the room very little. Turning away a real traveller who
is standing exactly where they say they are costs me the user.

## What the spoofing check buys, and what it does not

Fixes are checked for plausible travel between them, capped at 300 km/h, comfortably
above the fastest Dutch rail so that GPS jitter does not trip it. That rejects
teleportation across the country.

I want to be precise about what it does not do. A patient attacker who moves slowly is
not caught by it. Real enforcement is device attestation, and this is not that. The check
raises the cost of casual spoofing, and I would rather say so than imply a guarantee the
code does not make.

## Refusing the vendor API

The obvious way to get Dutch train data is the carrier's own API. I did not use it. A
vendor API means a key that can be revoked, a rate limit that can be tightened, and a
licence that covers one operator.

Instead the app reads the open CC0 GTFS-RT feeds the Dutch transit sector publishes,
parsed and reconciled on a Cloudflare Worker. It is more work up front. In exchange the
app covers every operator on the network, owes nobody a licence, and cannot be switched
off by a business decision I do not control.

## The line the fence does not cross

Location gates the social features. It never gates the timetable.

Chat, the station wall and the passport stamps sit behind the fence, because being there
is the point. But departure times, delays and platform changes are why a person opens a
train app at all, and somebody running for a train they are about to miss should never be
told to walk closer to a sensor. Status is always readable. Only the conversation is
earned.
