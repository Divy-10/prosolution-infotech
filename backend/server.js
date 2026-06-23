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
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    try {
        // 1. Save lead to MongoDB
        const newLead = new Lead({ name, email, phone, message });
        await newLead.save();
        console.log('✅ Lead saved:', name, email);

        // 2. Send email notification
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: `"ProSolution Infotech" <${process.env.EMAIL_USER}>`,
                replyTo: email,
                to: 'prosolutionsw@gmail.com',
                subject: `🔔 New Lead: ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
                        <hr style="border: 1px solid #eee;" />
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                        <p><strong>Message:</strong></p>
                        <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
                        <hr style="border: 1px solid #eee;" />
                        <p style="color: #999; font-size: 12px;">Sent from ProSolution Infotech website</p>
                    </div>
                `,
            };

            await transporter.sendMail(mailOptions);
            console.log('✅ Email sent for lead:', name);
        } catch (mailErr) {
            console.warn('⚠️ Email notification failed, but lead was saved:', mailErr.message);
        }

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (err) {
        console.error('❌ Error:', err.message);
        res.status(500).json({ error: 'Failed to process your message. Please try again.' });
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

// ───── Health Check ─────
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
