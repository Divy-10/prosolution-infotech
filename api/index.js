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
        await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 3000 });
        isConnected = true;
        console.log('🚀 MongoDB Connected.');
    } catch (err) {
        console.warn('⚠️ MongoDB Connection Failed (continuing without DB):', err.message);
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

// ───── Contact Form Endpoint ─────
app.post(['/api/contact', '/contact'], async (req, res) => {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    try {
        // 1. Try saving lead to MongoDB if available
        try {
            await connectDB();
            if (mongoose.connection.readyState === 1) {
                const newLead = new Lead({ name, email, phone, message });
                await newLead.save();
                console.log('✅ Lead saved to DB:', name, email);
            }
        } catch (dbErr) {
            console.warn('⚠️ Could not save lead to MongoDB:', dbErr.message);
        }

        // 2. Send email notification via Nodemailer
        const EMAIL_USER = process.env.EMAIL_USER || 'prosolutionsw@gmail.com';
        const EMAIL_PASS = process.env.EMAIL_PASS || 'khqt xiwd dbzq vmjx';

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"ProSolution Infotech" <${EMAIL_USER}>`,
            replyTo: email,
            to: 'prosolutionsw@gmail.com',
            subject: `🔔 New Lead: ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px;">
                    <h2 style="color: #2563eb; margin-bottom: 10px;">New Contact Form Submission</h2>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
                    <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
                    <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p style="margin: 8px 0;"><strong>Message:</strong></p>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb; margin-top: 5px;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0 10px 0;" />
                    <p style="color: #64748b; font-size: 12px; text-align: center;">Sent from ProSolution Infotech Website</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully for lead:', name);

        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (err) {
        console.error('❌ Error processing contact form:', err.message);
        return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
});

// Health check endpoint
app.get(['/health', '/api/health'], (req, res) => {
    res.status(200).send('ok');
});

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 5002;
    app.listen(PORT, () => {
        console.log(`✅ Backend server running on port ${PORT}`);
    });
}
