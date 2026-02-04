import axiosInstance from "../api/axiosInstance";

export const generateAIEmail = (payload) => {
    return axiosInstance.post("/ai/get-ai-response", payload);
};
