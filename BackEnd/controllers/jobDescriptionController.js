import asyncHandler from 'express-async-handler';
import JobDescription from '../models/JobDescription.js';

// @desc    Add a new job description
// @route   POST /api/job-description
// @access  Private
export const addJobDescription = asyncHandler(async (req, res) => {
    const { jobTitle, roles, skills, noticePeriod, additionalNotes } = req.body;

    const jobDescription = await JobDescription.create({
        userId: req.user._id,
        jobTitle,
        roles,
        skills,
        noticePeriod,
        additionalNotes
    });

    if (jobDescription && jobDescription !== null) {
        res.status(201).json({
            success: true,
            message: 'Job description added successfully',
            data: jobDescription
        });
    } else {
        res.status(400);
        throw new Error('Invalid job description data');
    }
});

// @desc    Get all job descriptions for current user
// @route   GET /api/job-description
// @access  Private
export const getJobDescriptions = asyncHandler(async (req, res) => {
    const jobDescriptions = await JobDescription.find({ userId: req.user._id })
        .sort({ createdAt: -1 });

    res.json(jobDescriptions);
});
