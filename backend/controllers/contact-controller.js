const sgMail = require("@sendgrid/mail");

// Move this to the top to catch any initialization errors
try {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} catch (error) {
  console.error("SendGrid initialization error:", error);
}

const sendContactEmail = async (req, res) => {
  try {
    // Validate environment variables
    if (
      !process.env.SENDGRID_API_KEY ||
      !process.env.SENDGRID_VERIFIED_SENDER ||
      !process.env.ADMIN_EMAIL
    ) {
      throw new Error("Missing required environment variables");
    }

    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // First try sending to admin
    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.SENDGRID_VERIFIED_SENDER,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      console.log("Attempting to send admin notification...");
      const [response] = await sgMail.send(msg);
      console.log("Admin notification sent:", response.statusCode);

      // Only send confirmation if admin notification succeeds
      const confirmationMsg = {
        to: email,
        from: process.env.SENDGRID_VERIFIED_SENDER,
        subject: "We've Received Your Message",
        text: `Dear ${name},\n\nThank you for contacting us. We have received your message and will get back to you soon.\n\nBest regards,\nBlood Donor Team`,
        html: `
          <h3>Thank you for contacting us</h3>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you soon.</p>
          <br/>
          <p>Best regards,</p>
          <p>Blood Donor Team</p>
        `,
      };

      console.log("Attempting to send confirmation...");
      const [confirmResponse] = await sgMail.send(confirmationMsg);
      console.log("Confirmation sent:", confirmResponse.statusCode);

      res.status(200).json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    } catch (sendError) {
      console.error("SendGrid send error:", sendError);
      if (sendError.response) {
        console.error(sendError.response.body);
        // Check if it's a verification error
        const errors = sendError.response.body.errors || [];
        const isVerificationError = errors.some((error) =>
          error.message.includes("verify")
        );
        if (isVerificationError) {
          throw new Error(
            "Sender email not verified. Please verify your email address first."
          );
        }
      }
      throw new Error(sendError.message || "Failed to send email");
    }
  } catch (error) {
    console.error("Contact Form Error:", error);
    res.status(500).json({
      success: false,
      message:
        error.message || "Failed to send message. Please try again later.",
    });
  }
};

module.exports = {
  sendContactEmail,
};
