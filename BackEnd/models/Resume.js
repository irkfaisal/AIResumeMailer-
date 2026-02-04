import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
    // Resume File Details
    originalName: {
        type: String,
        required: [true, 'Original resume filename is required']
    },
    storedName: {
        type: String,
        required: [true, 'Stored resume filename is required']
    },
    mimeType: {
        type: String
    },
    size: {
        type: Number
    },

    // Cover Letter Details
    coverLetter: {
        type: String, // For text content
        trim: true
    },
    coverLetterStoredName: {
        type: String // If cover letter is uploaded as a file
    }
}, {
    timestamps: true
});

const Resume = mongoose.model('Resume', resumeSchema);
export default Resume;
