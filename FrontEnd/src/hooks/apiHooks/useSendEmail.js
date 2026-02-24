import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

export const useSendEmail = () => {
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);

    const sendEmail = async ({ to, subject, html }) => {
        setSending(true);
        setError(null);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/mail/send-email`, {
                to,
                subject,
                html
            }, {
                withCredentials: true
            });

            if (response.data.success) {
                toast.success('Email sent successfully!');
                return true;
            } else {
                throw new Error(response.data.message || 'Failed to send email');
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'Failed to send email';
            console.error('Error sending email:', err);
            setError(errorMessage);
            toast.error(errorMessage);
            return false;
        } finally {
            setSending(false);
        }
    };

    return {
        sendEmail,
        sending,
        error
    };
};
