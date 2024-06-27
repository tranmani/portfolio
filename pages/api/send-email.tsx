import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import GuestVisit from "../../emails/GuestVisit";
import { sendEmail } from "../../lib/email";
import GoogleReviewWithCoupon from "emails/GoogleReviewWithCoupon";

enum EmailType {
  SALON_GOOGLE_COUPON = "salon-google-coupon",
  TRANMANI_VIEW = "tranmani-view",
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { userName, userEmail, messagesToSent, type, subject, createdTime, code } = req.body;
  if (!type) {
    return res.status(400).json({ message: "should have type" });
  }

  if (type === EmailType.SALON_GOOGLE_COUPON) {
    // Check if the email is valid
    if (!userName || !code || !createdTime) {
      return res.status(400).json({ message: "Empty content" });
    }

    await sendEmail({
      to: "info@beautyartpro.ch",
      subject: subject ?? "Someone leave you a review on google and here is the coupon code!",
      html: render(
        GoogleReviewWithCoupon({
          guestName: userName,
          coupon: code,
          createdTime,
        }),
      ),
    });
  } else if (type === EmailType.TRANMANI_VIEW) {
    // Check if the email is valid
    if (!userEmail || !userName || !messagesToSent) {
      return res.status(400).json({ message: "Empty content" });
    }
    // validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    await sendEmail({
      to: "minhhuy8137@gmail.com",
      subject: subject ?? "Someone leave you a message at tranmani.com",
      html: render(
        GuestVisit({
          guestName: userName,
          guestEmail: userEmail,
          guestMessages: messagesToSent || [],
        }),
      ),
    });
  }

  return res.status(200).json({ message: "Email sent successfully" });
}
