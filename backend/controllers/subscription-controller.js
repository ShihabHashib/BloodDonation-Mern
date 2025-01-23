const Subscription = require("../models/subscription");
const sgMail = require("@sendgrid/mail");
const sgClient = require("@sendgrid/client");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

const createSubscription = async (req, res) => {
  try {
    const { email, bloodType } = req.body;

    // Create subscription in MongoDB
    const subscription = new Subscription({
      email,
      bloodType,
    });
    await subscription.save();

    // Add to SendGrid list
    const data = {
      list_ids: [process.env.SENDGRID_LIST_ID],
      contacts: [
        {
          email,
          custom_fields: {
            blood_type: bloodType,
          },
        },
      ],
    };

    try {
      await sgClient.request({
        method: "PUT",
        url: "/v3/marketing/contacts",
        body: data,
      });
    } catch (error) {
      console.error("SendGrid Error:", error);
      // Continue even if SendGrid fails
    }

    res.status(201).json({
      success: true,
      message: "Successfully subscribed",
      subscription,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "This email is already subscribed",
      });
    }
    res.status(500).json({
      success: false,
      message: "Failed to create subscription",
    });
  }
};

module.exports = {
  createSubscription,
};
