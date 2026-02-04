import mongoose from "mongoose";

// URL validation regex from frontend
const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
// Phone validation regex from frontend
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const userProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    // Basic Details
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        minlength: [2, 'Full name must be at least 2 characters'],
        maxlength: [100, 'Full name must not exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [phoneRegex, 'Please enter a valid phone number']
    },
    linkedinLink: {
        type: String,
        required: [true, 'LinkedIn profile link is required'],
        match: [urlRegex, 'Please enter a valid URL']
    },
    githubLink: {
        type: String,
        match: [urlRegex, 'Please enter a valid URL']
    },
    twitterLink: {
        type: String,
        match: [urlRegex, 'Please enter a valid URL']
    },
    portfolioLink: {
        type: String,
        match: [urlRegex, 'Please enter a valid URL']
    },
    articleLink: {
        type: String,
        match: [urlRegex, 'Please enter a valid URL']
    },

    // Job Details
    jobTitle: {
        type: String,
        required: [true, 'Current job title is required'],
        minlength: [2, 'Job title must be at least 2 characters'],
        maxlength: [100, 'Job title must not exceed 100 characters']
    },
    yearsOfExperience: {
        type: Number,
        required: [true, 'Years of experience is required'],
        min: [0, 'Years of experience cannot be negative'],
        max: [50, 'Years of experience must not exceed 50']
    },
    jobLocation: {
        type: String,
        maxlength: [200, 'Job location must not exceed 200 characters']
    },

    // Professional Details
    skills: {
        type: String,
        required: [true, 'Skills are required'],
        minlength: [2, 'Please enter at least one skill']
    },
    tools: {
        type: String
    },
    specialization: {
        type: String,
        required: [true, 'Specialization is required'],
        minlength: [2, 'Specialization must be at least 2 characters'],
        maxlength: [200, 'Specialization must not exceed 200 characters']
    },
    professionalSummary: {
        type: String,
        maxlength: [1000, 'Professional summary must not exceed 1000 characters']
    },
    projectLink: {
        type: String,
        required: [true, 'Project link is required'],
        match: [urlRegex, 'Please enter a valid URL']
    },
    projectDescription: {
        type: String,
        required: [true, 'Project description is required'],
        minlength: [10, 'Project description must be at least 10 characters'],
        maxlength: [500, 'Project description must not exceed 500 characters']
    },
    additionalInfo: {
        type: String,
        maxlength: [500, 'Additional info must not exceed 500 characters']
    }
}, {
    timestamps: true
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);
export default UserProfile;
