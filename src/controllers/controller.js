const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = (req, res) => {
  const { name, country, subject, email, message } = req.body;
  if (!email || !message) {
    res.status(404).json({ error: "Email and password are required" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: subject || `New message from ${name || "Anonymous"}`,
    text: `
        Name: ${name || "N/A"}
        Country: ${country || "N/A"}
        Message: ${message}
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
};

module.exports = { sendEmail };
