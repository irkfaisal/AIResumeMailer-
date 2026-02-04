import express from 'express';
import { uploadResume, getResume, addCoverLetter, getCoverLetter } from '../controllers/resumeController.js';
import authenticationCheck from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticationCheck);

router.post('/upload', uploadResume);
router.get('/', getResume);
router.post('/cover-letter', addCoverLetter);
router.get('/cover-letter', getCoverLetter);

export default router;
