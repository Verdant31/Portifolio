import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message, subject = " ", name } = req.query;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });
  const mailOptions = {
    from: "verdantdevreact@gmail.com",
    to: "verdantxd@gmail.com",
    subject: subject.toString(),
    text: "Olá!, eu me chamo " + name + ", " + message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
  res.status(200).json({ message: "Email enviado." });
}
