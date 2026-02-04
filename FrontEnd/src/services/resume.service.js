import axiosInstance from "../api/axiosInstance";

export const uploadResumeMetadata = (payload) => {
    return axiosInstance.post("/api/resume/upload", payload);
};

export const getResumeDetails = () => {
    return axiosInstance.get("/api/resume");
};

export const addCoverLetter = (payload) => {
    return axiosInstance.post("/api/resume/cover-letter", payload);
};
