import { useState } from "react";
import { generateAIEmail } from "../../services/ai.service";

export const useAI = () => {
    const [emailText, setEmailText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateEmail = async (payload) => {
        try {
            setLoading(true);
            const res = await generateAIEmail(payload);
            setEmailText(res.data.emailText);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        emailText,
        loading,
        error,
        generateEmail,
    };
};
