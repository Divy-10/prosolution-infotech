const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// ───── MongoDB Connection ─────
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/prosolution_db';
let isConnected = false;

const connectDB = async () => {
    if (isConnected || mongoose.connection.readyState >= 1) {
        isConnected = true;
        return;
    }
    try {
        await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 2000 });
        isConnected = true;
        console.log('🚀 [MongoDB] Connected successfully.');
    } catch (err) {
        console.warn('⚠️ [MongoDB Warning] Connection failed (continuing without DB):', err.message);
    }
};

// ───── Lead Schema & Model ─────
const leadSchema = new mongoose.Schema({
    name:      { type: String, required: true },
    email:     { type: String, required: true },
    phone:     { type: String, default: '' },
    message:   { type: String, required: true },
    status:    { type: String, default: 'New' },
    createdAt: { type: Date, default: Date.now },
});

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema, 'leads');

// ───── Contact Handler Function ─────
const handleContactRequest = async (req, res) => {
    console.log(`[API /api/contact] Incoming ${req.method} request from IP: ${req.ip || req.headers['x-forwarded-for'] || 'unknown'}`);
    
    // Handle GET or HEAD requests gracefully (e.g., health check or accidental GET)
    if (req.method === 'GET' || req.method === 'HEAD') {
        return res.status(200).json({ success: true, message: 'Contact API endpoint is active.' });
    }

    const { name, email, phone, message } = req.body || {};
    console.log('[API /api/contact] Received payload:', { name, email, phone, messageLength: message ? message.length : 0 });

    if (!name || !email || !message) {
        console.warn('[API /api/contact] Validation error: Missing required fields');
        return res.status(400).json({
            success: false,
            message: 'Name, email, and message are required.'
        });
    }

    try {
        // 1. Save lead to MongoDB (if available)
        try {
            await connectDB();
            if (mongoose.connection.readyState === 1) {
                const newLead = new Lead({ name, email, phone, message });
                await newLead.save();
                console.log('✅ [MongoDB] Lead saved successfully:', name, email);
            }
        } catch (dbErr) {
            console.warn('⚠️ [MongoDB Warning] Failed to save lead:', dbErr.message);
        }

        // 2. Send email notification via Nodemailer
        try {
            const EMAIL_USER = process.env.EMAIL_USER || 'prosolutionsw@gmail.com';
            const EMAIL_PASS = process.env.EMAIL_PASS || 'khqt xiwd dbzq vmjx';

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: EMAIL_USER,
                    pass: EMAIL_PASS,
                },
                tls: {
                    rejectUnauthorized: false,
                },
                connectionTimeout: 5000,
                greetingTimeout: 5000,
                socketTimeout: 5000,
            });

            const mailOptions = {
                from: `"ProSolution Infotech" <${EMAIL_USER}>`,
                replyTo: email,
                to: 'prosolutionsw@gmail.com',
                subject: `🔔 New Lead: ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
                        <h2 style="color: #2563eb; margin-bottom: 10px;">New Contact Form Submission</h2>
                        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
                        <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                        <p style="margin: 8px 0;"><strong>Message:</strong></p>
                        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb; margin-top: 5px;">
                            ${String(message).replace(/\n/g, '<br>')}
                        </div>
                        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0 10px 0;" />
                        <p style="color: #64748b; font-size: 12px; text-align: center;">Sent from ProSolution Infotech Website</p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('✅ [Nodemailer] Email sent successfully to prosolutionsw@gmail.com');
        } catch (mailErr) {
            console.warn('⚠️ [Nodemailer Warning] Email send failed:', mailErr.message);
        }

        return res.status(200).json({
            success: true,
            message: 'Contact form submitted successfully'
        });

    } catch (err) {
        console.error('❌ [API /api/contact Error]', err);
        return res.status(500).json({
            success: false,
            message: 'Unable to submit contact form'
        });
    }
};

// Route matching for contact form
app.all(['/api/contact', '/contact'], handleContactRequest);

// Health check endpoint
app.get(['/health', '/api/health'], (req, res) => {
    res.status(200).json({ success: true, status: 'ok' });
});

// Fallback POST handler
app.post('*', handleContactRequest);

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 5002;
    app.listen(PORT, () => {
        console.log(`✅ Backend server running on port ${PORT}`);
    });
}
