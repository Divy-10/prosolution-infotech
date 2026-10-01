import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

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
        console.log('🚀 [MongoDB] Connected.');
    } catch (err) {
        console.warn('⚠️ [MongoDB Warning]:', err.message);
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

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'GET') {
        return res.status(200).json({ success: true, message: 'Contact API endpoint is active.' });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { name, email, phone, message } = req.body || {};
    console.log('[API /api/contact] Received payload:', { name, email, phone });

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Name, email, and message are required.'
        });
    }

    try {
        // 1. Try saving lead to MongoDB if available
        try {
            await connectDB();
            if (mongoose.connection.readyState === 1) {
                const newLead = new Lead({ name, email, phone, message });
                await newLead.save();
                console.log('✅ [MongoDB] Lead saved:', name, email);
            }
        } catch (dbErr) {
            console.warn('⚠️ [MongoDB Warning]:', dbErr.message);
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
            console.log('✅ [Nodemailer] Email sent for lead:', name);
        } catch (mailErr) {
            console.warn('⚠️ [Nodemailer Warning]:', mailErr.message);
        }

        return res.status(200).json({
            success: true,
            message: 'Contact form submitted successfully'
        });
    } catch (err) {
        console.error('CONTACT API ERROR:', err);
        return res.status(500).json({
            success: false,
            message: 'Failed to submit contact form'
        });
    }
}
