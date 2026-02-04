import axiosInstance from "../api/axiosInstance";

export const getProfile = () => {
    return axiosInstance.get("/api/profile");
};

export const createOrUpdateProfile = (payload) => {
    return axiosInstance.post("/api/profile", payload);
};
