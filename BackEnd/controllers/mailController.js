import { transporter } from "../config/emailConfig.js";
import Email from "../models/Email.js";

export const sendEmail = async (req, res) => {
  const { recipientEmail, subject, message, senderEmail } = req.body; // Get email details from the request body

  const mailOptions = {
    from: process.env.EMAIL,
    to: recipientEmail,
    subject: subject,
    text: message,
  };

    // Create a new Email record in the database
    const emailRecord = new Email({
      recipient:recipientEmail,
      subject,
      body: message,
      senderEmail
    });

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("info", info)
    emailRecord.status = 'sent'; // If successful, update the status to 'sent'
    await emailRecord.save();
    return res.status(200).json({ success: true, message: 'Email sent', info });
  } catch (error) {
    console.error('Error sending email:', error);
    await emailRecord.save();
    return res.status(500).json({ success: false, message: 'Error sending email', error });
  }
};

