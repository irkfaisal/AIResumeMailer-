import axiosInstance from "../api/axiosInstance";

export const sendEmail = (payload) => {
    return axiosInstance.post("/mail/send-email", payload);
};
