import axios from "axios";

const API = axios.create({
    baseURL: 'https://airesumemailer.onrender.com' || 'https://ai-resume-mailer.irkfaisal.com',
    withCredentials: true
});

export const authAPI = {
    getCurrentUser: () => API.get('/auth/current_user'),
    logout: () => API.get('/auth/logout')
};

export const gmailAPI = {
    listMessages: () => API.get('/gmail/messages'),
    getMessage: (id) => API.get(`/gmail/messages/${id}`),
    sendEmail: (data) => API.post('/gmail/send', data)
};

export default API;