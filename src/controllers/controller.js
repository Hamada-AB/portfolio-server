const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (req, res) => {
  try {
    const { name, country, subject, email, message } = req.body;

    // Input validation
    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required" });
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject
        ? subject.trim()
        : `New message from ${name || "Anonymous"}`,
      text: `
        Name: ${name ? name.trim() : "N/A"}
        Country: ${country ? country.trim() : "N/A"}
        Email: ${email.trim()}
        Message: ${message.trim()}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Email sent successfully", id: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
};

module.exports = { sendEmail };
