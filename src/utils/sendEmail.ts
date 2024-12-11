import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export function sendEmail({
  email,
  subject,
  html,
}: {
  email: string;
  subject: string;
  html: string;
}) {
  return transporter.sendMail({
    from: `Lucas Costa Amaral <${process.env.EMAIL_USER}>`,
    to: email,
    subject: subject,
    html: html,
  });
}
