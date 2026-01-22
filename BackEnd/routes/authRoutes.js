import express from "express";
import passport from "passport";
const router = express.Router();

// @route   GET /auth/google
// @desc    Auth with Google
router.get('/google',
    passport.authenticate('google', {
        scope: [
            'profile',
            'email',
            'https://www.googleapis.com/auth/gmail.readonly',
            'https://www.googleapis.com/auth/gmail.send',
            'https://www.googleapis.com/auth/gmail.modify'
        ]
    })
);

// @route   GET /auth/google/callback
// @desc    Google auth callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect(process.env.CLIENT_URL);
    }
);

// @route   GET /auth/current_user
// @desc    Get currently logged in user
router.get('/current_user', (req, res) => {
    if (req.user) {
        // User is authenticated
        res.json({
            isAuthenticated: true,
            user: {
                id: req.user._id,
                email: req.user.email,
                name: req.user.name,
                picture: req.user.picture
            }
        });
    } else {
        // User is not authenticated
        res.json({
            isAuthenticated: false,
            user: null
        });
    }
});

// @route   GET /auth/logout
// @desc    Logout user
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ error: 'Logout failed' });
        res.redirect(process.env.CLIENT_URL);
    });
});

export default router;