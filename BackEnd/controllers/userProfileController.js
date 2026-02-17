import asyncHandler from 'express-async-handler';
import UserProfile from '../models/UserProfile.js';

// @desc    Create or Update user profile
// @route   POST /api/profile
// @access  Private
export const createOrUpdateProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const profileData = {
        userId,
        ...req.body
    };

    try {
        const profile = await UserProfile.findOneAndUpdate(
            { userId },
            profileData,
            { new: true, upsert: true, runValidators: true }
        );

        if (profile && profile !== null) {
            res.status(profile.createdAt === profile.updatedAt ? 201 : 200).json({
                success: true,
                message: profile.createdAt === profile.updatedAt ? 'Profile created successfully' : 'Profile updated successfully',
                data: profile
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Operation failed'
            });
            throw new Error('Operation failed');
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Operation failed'
        });
    }
});

// @desc    Get current user's profile
// @route   GET /api/profile
// @access  Private
export const getProfile = asyncHandler(async (req, res) => {
    const profile = await UserProfile.findOne({ userId: req.user._id });

    if (profile) {
        res.status(200).json({
            success: true,
            message: 'Profile fetched successfully',
            data: profile
        });
    } else {
        res.status(404).json({ message: 'Profile not found' });
    }
});
