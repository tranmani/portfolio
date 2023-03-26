import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import EmailTemplate from "../../emails/EmailTemplate";
import { sendEmail } from "../../lib/email";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { userName, userEmail, messagesToSent } = req.body;

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
    subject: "Someone leave you a message at tranmani.com",
    html: render(
      EmailTemplate({
        guestName: userName || "No name",
        guestEmail: userEmail || "No email",
        guestMessages: messagesToSent || [],
      }),
    ),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
