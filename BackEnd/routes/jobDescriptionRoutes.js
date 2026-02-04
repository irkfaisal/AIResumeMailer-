import express from 'express';
import { addJobDescription, getJobDescriptions } from '../controllers/jobDescriptionController.js';
import authenticationCheck from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticationCheck);

router.route('/')
    .post(addJobDescription)
    .get(getJobDescriptions);

export default router;
