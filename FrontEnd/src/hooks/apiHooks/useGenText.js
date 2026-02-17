import { useState } from "react";
import { toast } from 'sonner';
import { generateAIEmail } from "../../services/ai.service";

export const useGenText = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    function createPayload() {
        const profile = JSON.parse(localStorage.getItem("UserProfile"));
        const jobDescription = JSON.parse(localStorage.getItem("JobDescription"));
        if (!jobDescription) {
            toast.error("Kindly add job description");
            return;
        }
        const payload = {
            profile: profile,
            jobDescription: jobDescription[0],
        };
        return payload;
    }

    const genText = async (payload) => {
        setLoading(true);
        try {
            const res = await generateAIEmail(payload);
            console.log("ai resp", res);
            if (!res.success) {
                throw new Error(res.message);
            }
            setData(res);
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        data,
        genText,
        createPayload
    };
};