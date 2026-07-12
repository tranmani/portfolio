---
title: Perron
hook: A chat room for a train platform that you can only join while you are physically standing on it.
problem: >-
  Everything rests on the location check. If you can join a platform's room from your
  sofa, the room is just another chat app. But a station is the worst possible place to
  ask for a GPS fix: you are often under a canopy or below ground, accuracy degrades to
  tens of metres, and two platforms can sit twelve metres apart. The fence has to be
  tight enough to mean something and loose enough that a person genuinely standing on
  platform 5 is not told they are nowhere.
role: Solo. Design, mobile app, backend, infrastructure.
year: 2026
order: 1
stack: ["Expo", "TypeScript", "Cloudflare Workers", "GTFS-RT"]
cover: ../../assets/projects/perron.png
coverAlt: The Perron landing page, showing the location-gated station chat concept.
links:
  - label: perron.tranmani.com
    href: https://perron.tranmani.com
status: In TestFlight. Not yet on the App Store.
proof:
  - Built on open CC0 feeds, so it covers every operator on the Dutch network rather than one carrier
  - Native push on iOS via APNs, with subscription receipts verified against the App Store Server API in the TestFlight sandbox
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

## What it costs

The fence has false negatives, and they fall on the people least able to forgive them.
A commuter under a canopy at a below ground platform can be standing exactly where they
say they are and still be refused the room, because the fix that reached the phone was
never good enough to prove it. Loosening the radius fixes that and lets somebody join
platform 5 from platform 6, which quietly destroys the premise. There is no setting that
is correct for both, so the app holds a tight fence and eats the false negatives, and
that is a choice I would revisit with better indoor positioning rather than defend
forever.
