import express from 'express';
import { createOrUpdateProfile, getProfile } from '../controllers/userProfileController.js';
import authenticationCheck from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticationCheck);

router.route('/')
    .post(createOrUpdateProfile)
    .get(getProfile);

export default router;
