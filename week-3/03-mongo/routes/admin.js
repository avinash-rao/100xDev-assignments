const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    username = req.body.username;
    password = req.body.password;

    const admin = Admin.findOne({ username });
    if (admin) {
        res.status(409).json({
            msg: 'Username already taken'
        })
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;