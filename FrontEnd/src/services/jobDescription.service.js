import axiosInstance from "../api/axiosInstance";

export const addJobDescription = (payload) => {
    return axiosInstance.post("/api/job-description", payload);
};

export const getAllJobDescriptions = () => {
    return axiosInstance.get("/api/job-description");
};
