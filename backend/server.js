const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ───── MongoDB Connection ─────
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🚀 MongoDB Connected.'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err.message));

// ───── Lead Schema & Model ─────
const leadSchema = new mongoose.Schema({
    name:      { type: String, required: true },
    email:     { type: String, required: true },
    phone:     { type: String, default: '' },
    message:   { type: String, required: true },
    status:    { type: String, default: 'New' },
    createdAt: { type: Date, default: Date.now },
});

const Lead = mongoose.model('Lead', leadSchema, 'leads');

// ───── Contact Form Endpoint ─────
app.post('/api/contact', async (req, res) => {
    console.log(`[API /api/contact] Incoming ${req.method} request`);
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
        console.warn('[API /api/contact] Validation error: Missing required fields');
        return res.status(400).json({
            success: false,
            message: 'Name, email, and message are required.'
        });
    }

    try {
        // 1. Save lead to MongoDB (safely)
        try {
            if (mongoose.connection.readyState === 1) {
                const newLead = new Lead({ name, email, phone, message });
                await newLead.save();
                console.log('✅ [MongoDB] Lead saved:', name, email);
            }
        } catch (dbErr) {
            console.warn('⚠️ [MongoDB Warning] Could not save lead:', dbErr.message);
        }

        // 2. Send email notification (safely)
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
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
                        <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
                        <hr style="border: 1px solid #eee;" />
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                        <p><strong>Message:</strong></p>
                        <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${String(message).replace(/\n/g, '<br>')}</p>
                        <hr style="border: 1px solid #eee;" />
                        <p style="color: #999; font-size: 12px;">Sent from ProSolution Infotech website</p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('✅ [Nodemailer] Email sent for lead:', name);
        } catch (mailErr) {
            console.warn('⚠️ [Nodemailer Warning] Email notification warning:', mailErr.message);
        }

        return res.status(200).json({
            success: true,
            message: 'Contact form submitted successfully'
        });
    } catch (err) {
        console.error('❌ [API Error]', err);
        return res.status(500).json({
            success: false,
            message: 'Unable to submit contact form'
        });
    }
});

// ───── Get All Leads (for admin/testing) ─────
app.get('/api/leads', async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.status(200).json(leads);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch leads.' });
    }
});

// ───── Health Check Endpoint ─────
app.get(['/health', '/api/health'], (req, res) => {
    res.status(200).send('ok');
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);

    // ───── Self-Ping / Keep-Alive Service (Every 15 Minutes) ─────
    const FIFTEEN_MINUTES = 15 * 60 * 1000;
    const http = require('http');
    const https = require('https');

    const pingBackend = () => {
        const baseUrl = process.env.SERVER_URL || `http://localhost:${PORT}`;
        const targetUrl = `${baseUrl}/health`;
        const client = targetUrl.startsWith('https') ? https : http;

        client.get(targetUrl, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                console.log(`⏰ [15-Min Keep-Alive Ping] ${targetUrl} -> Status: ${res.statusCode}, Response: "${data}"`);
            });
        }).on('error', (err) => {
            console.warn(`⚠️ [15-Min Keep-Alive Ping Warning]:`, err.message);
        });
    };

    // Trigger initial ping after server startup and repeat every 15 minutes
    setInterval(pingBackend, FIFTEEN_MINUTES);
});

