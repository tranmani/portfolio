import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

export const sendEmail = async (data: EmailPayload) => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_FROM_EMAIL) {
    console.warn("SMTP environment variables are missing! Email functionality might not work as expected.");
  }

  const port = parseInt(process.env.SMTP_PORT || "2525");
  const host = process.env.SMTP_HOST || "smtp.mailtrap.io";

  console.log(`[sendEmail] Initializing SMTP transport for ${host}:${port}`);

  const smtpOptions = {
    host,
    port,
    secure: port === 465, // Use true for 465, false for all other ports
    auth: {
      user: process.env.SMTP_USER || "user",
      pass: process.env.SMTP_PASSWORD || "password",
    },
  };

  const transporter = nodemailer.createTransport(smtpOptions);

  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
}