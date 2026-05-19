import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Reusable utility to send an email via Nodemailer
 * @param {Object} options - Email options
 * @param {string} options.email - The recipient email address
 * @param {string} options.subject - The subject of the email
 * @param {string} options.html - The HTML content of the email
 */
const sendEmail = async (options) => {
  try {
    // 1. Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: process.env.EMAIL_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Define the email options
    const mailOptions = {
      from: `FMCG Portal <${process.env.EMAIL_USER}>`,
      to: options.email,
      subject: options.subject,
      html: options.html,
    };

    // 3. Actually send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    // We log the error but don't throw it, so the main API response doesn't crash 
    // if email credentials are wrong or network fails.
    return false;
  }
};

export default sendEmail;
