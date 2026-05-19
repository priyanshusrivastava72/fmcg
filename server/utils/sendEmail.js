import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Reusable utility to send an email via Resend API
 * @param {Object} options - Email options
 * @param {string} options.email - The recipient email address
 * @param {string} options.subject - The subject of the email
 * @param {string} options.html - The HTML content of the email
 */
const sendEmail = async (options) => {
  try {
    console.log(`sendEmail utility triggered for recipient: ${options.email}`);
    const apiKey = process.env.RESEND_API_KEY;
    console.log(`Using Resend API Key prefix: ${apiKey ? apiKey.substring(0, 10) + '...' : 'undefined'}`);

    if (!apiKey) {
      console.warn('RESEND_API_KEY is not defined in environment variables. Email not sent.');
      return false;
    }

    // Default sender for Resend sandbox is 'onboarding@resend.dev'
    // Once you verify your domain, you can set SENDER_EMAIL to something like 'FMCG Portal <portal@vardha.live>'
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    const response = await axios.post(
      'https://api.resend.com/emails',
      {
        from: senderEmail,
        to: [options.email],
        subject: options.subject,
        html: options.html,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(`Email sent successfully via Resend API. ID: ${response.data.id}`);
    return true;
  } catch (error) {
    console.error('Error sending email via Resend API:', error.response?.data || error.message);
    return false;
  }
};

export default sendEmail;
