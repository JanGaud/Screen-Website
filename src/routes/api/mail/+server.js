import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST({ request }) {
    try {
        const formData = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: formData.email,
            to: process.env.EMAIL_USER,
            subject: 'Formulaire de contact Janis Gaudreault.com',
            text: `${formData.name}: ${formData.message}`,
            html: `<p>Nouveau message de mon portfolio:<strong>${formData.name} : ${formData.email}</strong>:</p><p>${formData.message}</p>`
        };

        const info = await transporter.sendMail(mailOptions);
        return json({ success: true, message: 'Email sent successfully', info: info }, { status: 200 });

    } catch (error) {
        return json({ success: false, message: 'Failed to send email', error: error.message }, { status: 500 });
    }
}
