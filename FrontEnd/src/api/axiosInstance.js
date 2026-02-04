import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8500",
    withCredentials: true,
    timeout: 10000,
});


axiosInstance.interceptors.response.use(

    (response) => {
        if (response?.data?.success === false) {
            return Promise.reject(
                new Error(response.data.message || "Request failed")
            );
        }
        return response.data;
    },

    (error) => {
        let message = "Something went wrong";

        if (error.response) {
            message =
                error.response.data?.message ||
                `Request failed with status ${error.response.status}`;
        }
        else if (error.request) {
            message = "No response from server";
        }
        else if (error.message) {
            message = error.message;
        }

        return Promise.reject(new Error(message));
    }
);

export default axiosInstance;
