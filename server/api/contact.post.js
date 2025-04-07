import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, subject, message } = body;

  if (!email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required.'
    });
  }


  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { minVersion: 'TLSv1.2' }
  });

  const mailOptions = {
    from: `${email}`,
    to: process.env.CONTACT_EMAIL,
    subject: subject,
    text: message,
    replyTo: email
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { message: 'Email sent successfully.', messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Email sending failed.'
    });
  }
});
