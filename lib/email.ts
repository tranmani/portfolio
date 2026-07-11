import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export const sendEmail = async (data: EmailPayload) => {
  const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_EMAIL } = process.env;

  // Fail closed. Falling back to default credentials silently sends mail through
  // a transport nobody configured, or hangs until the socket times out.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM_EMAIL) {
    throw new Error("SMTP is not configured");
  }

  const port = parseInt(process.env.SMTP_PORT || "2525", 10);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  return await transporter.sendMail({ from: SMTP_FROM_EMAIL, ...data });
};
