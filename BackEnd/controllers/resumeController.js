import asyncHandler from 'express-async-handler';
import Resume from '../models/Resume.js';

// @desc    Upload resume metadata (assuming file is handled by middleware like multer)
// @route   POST /api/resume/upload
// @access  Private
export const uploadResume = asyncHandler(async (req, res) => {
    // If using multer, req.file would contain the file info
    // For now, we take from req.body as a fallback or metadata update
    const { originalName, storedName, mimeType, size } = req.body;

    if (!originalName || !storedName) {
        res.status(400);
        throw new Error('Please provide resume file details');
    }

    try {
        const resume = await Resume.findOneAndUpdate(
            { userId: req.user._id },
            { originalName, storedName, mimeType, size },
            { new: true, upsert: true, runValidators: true }
        );

        if (resume && resume !== null) {
            res.status(200).json({
                success: true,
                message: "Resume saved successfully"
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }

});

// @desc    Get current user's resume details
// @route   GET /api/resume
// @access  Private
export const getResume = asyncHandler(async (req, res) => {
    const resume = await Resume.findOne({ userId: req.user._id });

    if (resume) {
        res.json(resume);
    } else {
        res.status(404).json({ message: 'Resume not found' });
    }
});

// @desc    Add or update cover letter
// @route   POST /api/resume/cover-letter
// @access  Private
export const addCoverLetter = asyncHandler(async (req, res) => {
    const { coverLetter, coverLetterStoredName } = req.body;

    const resume = await Resume.findOneAndUpdate(
        { userId: req.user._id },
        {
            userId: req.user._id,
            coverLetter,
            coverLetterStoredName
        },
        { new: true, upsert: true, runValidators: true }
    );

    res.status(200).json(resume);
});

// @desc    Get cover letter
// @route   GET /api/resume/cover-letter
// @access  Private
export const getCoverLetter = asyncHandler(async (req, res) => {
    const resume = await Resume.findOne({ userId: req.user._id }).select('coverLetter coverLetterStoredName');

    if (resume) {
        res.json(resume);
    } else {
        res.status(404).json({ message: 'Cover letter details not found' });
    }
});
