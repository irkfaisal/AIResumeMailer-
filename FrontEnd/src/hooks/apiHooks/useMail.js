import { useState } from "react";
import { sendEmail } from "../../services/mail.service";

export const useMail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const send = async (payload) => {
        try {
            setLoading(true);
            await sendEmail(payload);
            setSuccess(true);
        } catch (err) {
            setError(err);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        success,
        send,
    };
};
