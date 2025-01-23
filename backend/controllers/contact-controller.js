const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Configure nodemailer with your Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Use App Password from Gmail
  },
});

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const contact = new Contact({
      name,
      email,
      subject,
      message,
    });
    await contact.save();

    // Send email notification to your Gmail
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Your Gmail address
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting us",
      html: `
        <h2>Thank you for contacting Blood Donor</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you soon.</p>
        <p>Your message details:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact submission error:", error);
    res
      .status(500)
      .json({ message: "Failed to send message", error: error.message });
  }
};

module.exports = {
  submitContact,
};
