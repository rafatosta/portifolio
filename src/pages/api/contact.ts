import type { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, phone, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Novo formulario de contato do seu portfólio`,
    html: `<h2>Você tem um novo formulário de contato.</h2><br>
      <p><strong>Nome:</strong> ${name}</p><br>
      <p><strong>Número:</strong> ${phone}</p><br>
      <p><strong>Email:</strong> ${email}</p><br>
      <p><strong>Assunto:</strong> ${subject}</p><br>
      <p><strong>Mensagem:</strong> ${message}</p><br>`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
      res.status(400).json({ status: err });
    } else {
      res.status(200).json({ status: "Email sent successfully" });
    }
  });
}
