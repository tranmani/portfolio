import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import GuestVisit from "../../emails/GuestVisit";
import { sendEmail } from "../../lib/email";
import { portfolioConfig } from "@/lib/config";

const renderEmail = (component: React.ReactElement) => {
  const doctype =
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  return `${doctype}${renderToStaticMarkup(component)}`;
};

const MAX_NAME = 100;
const MAX_MESSAGE = 2000;
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;

// Best-effort in-process limiter. It resets on cold start, which is acceptable
// here: it exists to blunt casual abuse of an endpoint that sends mail, not to
// be an authoritative quota. A durable store is the right answer if this moves.
const hits = new Map<string, number[]>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
};

const clientIp = (req: NextApiRequest) => {
  const fwd = req.headers["x-forwarded-for"];
  const raw = Array.isArray(fwd) ? fwd[0] : fwd?.split(",")[0];
  return (raw || req.socket.remoteAddress || "unknown").trim();
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({ message: "Too many requests. Try again later." });
  }

  const { userName, userEmail, messagesToSent, website } = req.body ?? {};

  // Honeypot: a real browser leaves this hidden field empty.
  if (website) {
    return res.status(200).json({ message: "Email sent successfully" });
  }

  if (typeof userName !== "string" || typeof userEmail !== "string" || !messagesToSent?.length) {
    return res.status(400).json({ message: "Empty content" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail) || userEmail.length > MAX_NAME) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!Array.isArray(messagesToSent)) {
    return res.status(400).json({ message: "Empty content" });
  }

  // Rebuild each message from scratch rather than forwarding the client's object,
  // so nothing unexpected reaches the email template.
  const messages = messagesToSent.slice(0, 50).map((m: any, i: number) => ({
    id: Number(m?.id ?? i),
    content: String(m?.content ?? "").slice(0, MAX_MESSAGE),
    isMe: Boolean(m?.isMe),
    time: m?.time ? String(m.time).slice(0, 32) : undefined,
  }));

  const totalLength = messages.reduce((n, m) => n + m.content.length, 0);

  if (userName.length > MAX_NAME || totalLength > MAX_MESSAGE) {
    return res.status(400).json({ message: "Content too long" });
  }

  try {
    await sendEmail({
      to: portfolioConfig.contact.email,
      subject: `Message from ${userName} via tranmani.com`,
      html: renderEmail(
        <GuestVisit guestName={userName} guestEmail={userEmail} guestMessages={messages} />,
      ),
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email API error:", error?.name, error?.message);
    return res.status(500).json({ message: "Could not send the message. Please email me directly." });
  }
}
