---
title: Perron
hook: A chat room for a train platform that you can only join while you are physically standing on it.
problem: >-
  The geofence is not a feature of this product, it is the product. If you can join
  a platform's room from your sofa, the room is just another chat app. So the location
  check has to be the thing everything else hangs off, and it has to hold.
role: Solo. Design, mobile app, backend, infrastructure.
year: 2026
order: 1
stack: ["Expo", "TypeScript", "Cloudflare Workers", "GTFS-RT"]
cover: ../../assets/projects/perron.png
coverAlt: The Perron landing page, showing the location-gated station chat concept.
links:
  - label: perron.tranmani.com
    href: https://perron.tranmani.com
proof:
  - Covers every operator on the Dutch network, not just one
  - Live departures, disruption rooms, and a station wall
  - iOS build with native push and a verified App Store subscription
---

Waiting for a train is dead time, and everyone standing around you is waiting too.
Perron opens an anonymous room for the people actually at your station, right now.
Step onto the platform and the room opens. Walk away and it closes behind you.

## Refusing the vendor API

The obvious way to get Dutch train data is the carrier's own API. I did not use it.
A vendor API means a key that can be revoked, a rate limit that can be tightened,
and a licence that covers one operator. Building a product on top of that is building
on a landlord's floor.

Instead the app reads the open CC0 GTFS-RT feeds that the Dutch transit sector
publishes: protobuf trip updates, parsed and reconciled on a Cloudflare Worker.
It costs more work up front. In exchange the app covers every operator on the network,
owes nobody a licence, and cannot be switched off by a business decision I do not control.

## The line the geofence does not cross

Location gates the social features. It never gates safety.

The fun of Perron is that you have to be there, so the chat, the station wall and the
passport stamps are all behind the fence. But departure times, delays and platform
changes are the reason someone opens a train app at all, and a person who is running for
a train they are about to miss should never be told to walk closer to a sensor. Status is
always readable. Only the conversation is earned.

That distinction is the whole product judgement. It is easy to gate everything and call
it consistency, and it would have made the app worse.
