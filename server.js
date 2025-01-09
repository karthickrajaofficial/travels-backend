// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

// Import email templates
const userEmailTemplate = require('./templates/userEmailTemplate');
const adminEmailTemplate = require('./templates/adminEmailTemplate');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Error with email configuration:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const formData = req.body;
    console.log('Received form data:', formData);

    // Generate HTML content from templates
    const userHtml = userEmailTemplate(formData);
    const adminHtml = adminEmailTemplate(formData);

    // Email content sent to the user
    const mailOptions = {
      from: {
        name: 'Grand Royal Tours',
        address: process.env.EMAIL_USER
      },
      to: formData.email,
      subject: `Travel Inquiry Confirmation - Grand Royal Tours`,
      html: userHtml
    };

    // Notification email to admin
    const adminNotification = {
      from: {
        name: 'Grand Royal Tours Website',
        address: process.env.EMAIL_USER
      },
      to: process.env.ADMIN_EMAIL || 'info@grandroyaltours.com',
      subject: `New Travel Inquiry from ${formData.name}`,
      html: adminHtml
    };

    console.log('Attempting to send emails...');

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(adminNotification)
    ]);

    console.log('Emails sent successfully');
    res.status(200).json({ 
      status: 'success',
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      status: 'error',
      message: 'Failed to send email',
      error: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    status: 'error',
    message: 'Something broke!',
    error: err.message 
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});