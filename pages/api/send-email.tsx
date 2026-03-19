import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import { render } from "@react-email/render";
import GuestVisit from "../../emails/GuestVisit";
import { sendEmail } from "../../lib/email";
import GoogleReviewWithCoupon from "../../emails/GoogleReviewWithCoupon";
import { portfolioConfig } from "@/lib/config";

enum EmailType {
  SALON_GOOGLE_COUPON = "salon-google-coupon",
  CONTACT_FORM = "tranmani-view",
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userName, userEmail, messagesToSent, type, subject, createdTime, code } = req.body;

  if (!type) {
    return res.status(400).json({ message: "Missing email type" });
  }

  try {
    if (type === EmailType.SALON_GOOGLE_COUPON) {
      if (!userName || !code || !createdTime) {
        return res.status(400).json({ message: "Empty content" });
      }

      await sendEmail({
        to: "info@beautyartpro.ch",
        subject: subject ?? "Someone left a review and here is the coupon code!",
        html: render(
          <GoogleReviewWithCoupon
            guestName={userName}
            coupon={code}
            createdTime={createdTime}
          />
        ),
      });
    } else if (type === EmailType.CONTACT_FORM) {
      if (!userEmail || !userName || !messagesToSent) {
        return res.status(400).json({ message: "Empty content" });
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
        return res.status(400).json({ message: "Invalid email" });
      }

      await sendEmail({
        to: portfolioConfig.contact.email,
        subject: subject ?? `Message from ${userName} via ${portfolioConfig.profile.projectName}`,
        html: render(
          <GuestVisit
            guestName={userName}
            guestEmail={userEmail}
            guestMessages={messagesToSent || []}
          />
        ),
      });
    } else {
      return res.status(400).json({ message: "Unsupported email type" });
    }

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email API Error - Type:", error?.name, "Message:", error?.message, "Stack:", error?.stack);
    
    // Attempt to return a slightly more descriptive error message in the response if it's safe
    const errorMessage = error?.message || "Internal server error";
    return res.status(500).json({ message: `Internal server error: ${errorMessage}` });
  }
}
