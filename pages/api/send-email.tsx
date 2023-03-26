import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import EmailTemplate from "../../emails/EmailTemplate";
import { sendEmail } from "../../lib/email";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userName, userEmail, messagesToSent } = req.body;

  const cleanUserEmail = userEmail.replace(" ", "");
  // Check if the email is valid
  if (!cleanUserEmail || !userName || !messagesToSent) {
    return res.status(400).json({ message: "Empty content" });
  }
  // validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanUserEmail)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  await sendEmail({
    to: "minhhuy8137@gmail.com",
    subject: "Someone leave you a message at tranmani.com",
    html: render(
      EmailTemplate({
        guestName: userName || "No name",
        guestEmail: cleanUserEmail || "No email",
        guestMessages: messagesToSent || [],
      }),
    ),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
