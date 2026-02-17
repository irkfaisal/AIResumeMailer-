import { google } from 'googleapis';
import asyncHandler from 'express-async-handler';

const OAuth2 = google.auth.OAuth2;

const createAuthClient = async () => {
    const oauth2Client = new OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });

    await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
                console.error("Error retrieving access token:", err);
                reject(`Failed to create access token: ${err.message || err}`);
                return;
            }
            resolve(token);
        });
    });

    return oauth2Client;
};

const makeBody = (to, from, subject, message) => {
    const str = [
        `To: ${to}`,
        `From: ${from}`,
        `Subject: ${subject}`,
        `Content-Type: text/html; charset=utf-8`,
        `MIME-Version: 1.0`,
        ``,
        message
    ].join('\n');

    return Buffer.from(str)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
};

export const sendEmail = asyncHandler(async (req, res) => {
    const { to, subject, html } = req.body;

    if (!to || !subject || !html) {
        return res.status(400).json({
            success: false,
            message: 'Please provide to, subject, and html content'
        });
    }

    try {
        const authClient = await createAuthClient();
        const gmail = google.gmail({ version: 'v1', auth: authClient });

        const raw = makeBody(to, process.env.EMAIL, subject, html);

        await gmail.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: raw,
            },
        });

        res.status(200).json({
            success: true,
            message: 'Email sent successfully via Gmail API'
        });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message
        });
    }
});

