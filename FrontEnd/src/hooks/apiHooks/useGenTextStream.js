import { useState } from "react";
import { toast } from 'sonner';

export const useGenTextStream = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const genTextStream = async (payload, onChunk) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/ai/get-ai-response`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
                // Ensure cookies/sessions are sent if needed, matching axios withCredentials: true
                credentials: 'include',
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Request failed with status ${response.status}`);
            }

            if (!response.body) {
                throw new Error("ReadableStream not yet supported in this browser.");
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                buffer += chunk;

                const lines = buffer.split("\n");
                // Keep the last part in buffer if it's incomplete
                buffer = lines.pop(); // The last element is either empty (if valid end of line) or incomplete line

                for (const line of lines) {
                    const trimmedLine = line.trim();
                    if (!trimmedLine || !trimmedLine.startsWith("data: ")) continue;

                    try {
                        const jsonStr = trimmedLine.replace("data: ", "");
                        const data = JSON.parse(jsonStr);
                        if (data.delta) {
                            if (onChunk) {
                                onChunk(data.delta);
                            }
                        }
                    } catch (e) {
                        console.error("Error parsing stream line", e);
                    }
                }
            }

        } catch (err) {
            console.error("Stream error:", err);
            setError(err);
            toast.error(err.message || "Failed to generate text");
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        genTextStream,
        createPayload
    };
};
