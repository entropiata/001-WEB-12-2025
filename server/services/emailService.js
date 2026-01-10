const nodemailer = require('nodemailer');

/**
 * Email Service for sending contact form emails
 * Uses Gmail SMTP with app-specific password
 */

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

/**
 * Format contact form data into HTML email
 */
const formatContactEmail = (data) => {
  const { nama, email, pesan, timestamp } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    .section {
      background: white;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      border-left: 4px solid #059669;
    }
    .section-title {
      color: #059669;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
    }
    .info-row {
      display: flex;
      margin-bottom: 10px;
    }
    .info-label {
      font-weight: 600;
      min-width: 100px;
      color: #6b7280;
    }
    .info-value {
      color: #111827;
    }
    .message-box {
      background: #f3f4f6;
      padding: 15px;
      border-radius: 6px;
      white-space: pre-wrap;
      word-wrap: break-word;
      line-height: 1.8;
    }
    .footer {
      background: #374151;
      color: #d1d5db;
      padding: 20px;
      text-align: center;
      font-size: 12px;
      border-radius: 0 0 10px 10px;
    }
    .footer a {
      color: #10b981;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📬 PESAN BARU DARI WEBSITE</h1>
    <p style="margin: 5px 0 0 0; opacity: 0.9;">Puskesmas Pasongsongan</p>
  </div>
  
  <div class="content">
    <div class="section">
      <div class="section-title">
        📋 INFORMASI PENGIRIM
      </div>
      <div class="info-row">
        <div class="info-label">Nama:</div>
        <div class="info-value">${nama}</div>
      </div>
      <div class="info-row">
        <div class="info-label">Email/Telepon:</div>
        <div class="info-value">${email.includes('@') ? `<a href="mailto:${email}" style="color: #059669;">${email}</a>` : email}</div>
      </div>
      <div class="info-row">
        <div class="info-label">Waktu:</div>
        <div class="info-value">${timestamp}</div>
      </div>
    </div>
    
    <div class="section">
      <div class="section-title">
        💬 PESAN
      </div>
      <div class="message-box">
${pesan}
      </div>
    </div>
  </div>
  
  <div class="footer">
    <p style="margin: 0 0 10px 0;">
      Pesan ini dikirim otomatis dari formulir kontak website<br>
      <strong>Puskesmas Pasongsongan</strong>
    </p>
    <p style="margin: 0; opacity: 0.7;">
      Balas langsung ke email pengirim untuk merespons pesan ini
    </p>
  </div>
</body>
</html>
  `;
};

/**
 * Send contact form email
 * @param {Object} contactData - Contact form data
 * @param {string} contactData.nama - Sender's name
 * @param {string} contactData.email - Sender's email
 * @param {string} contactData.pesan - Message content
 * @returns {Promise<Object>} - Email send result
 */
const sendContactEmail = async (contactData) => {
  try {
    // Validate required fields
    if (!contactData.nama || !contactData.email || !contactData.pesan) {
      throw new Error('Missing required fields');
    }

    // Validate email or phone format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/; // Accepts digits, spaces, dashes, plus, and parentheses

    if (!emailRegex.test(contactData.email) && !phoneRegex.test(contactData.email)) {
      throw new Error('Invalid email or phone number format');
    }

    // Add timestamp in WIB timezone
    const now = new Date();
    const wibOffset = 7 * 60; // WIB is UTC+7
    const wibTime = new Date(now.getTime() + wibOffset * 60 * 1000);
    const timestamp = wibTime.toLocaleString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Jakarta',
      hour12: false
    }) + ' WIB';

    const emailData = {
      ...contactData,
      timestamp
    };

    // Create transporter
    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: `"Puskesmas Pasongsongan" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'entropiata.agency@gmail.com',
      replyTo: contactData.email,
      subject: `[Puskesmas] Pesan Baru dari ${contactData.nama}`,
      html: formatContactEmail(emailData),
      text: `
PESAN BARU DARI WEBSITE PUSKESMAS PASONGSONGAN

INFORMASI PENGIRIM
Nama           : ${contactData.nama}
Email/Telepon  : ${contactData.email}
Waktu          : ${timestamp}

PESAN
${contactData.pesan}

---
Pesan ini dikirim otomatis dari website Puskesmas Pasongsongan
      `.trim()
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully:', info.messageId);

    return {
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully'
    };

  } catch (error) {
    console.error('❌ Email send error:', error);

    return {
      success: false,
      error: error.message,
      message: 'Failed to send email'
    };
  }
};

/**
 * Verify email configuration
 */
const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email server is ready');
    return true;
  } catch (error) {
    console.error('❌ Email server verification failed:', error.message);
    return false;
  }
};

module.exports = {
  sendContactEmail,
  verifyEmailConfig
};
