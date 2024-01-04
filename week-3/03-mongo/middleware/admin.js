// Middleware for handling auth
const {Admin} = require("../db");

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = await Admin.findOne({ username });
    if (!admin || password !== admin.password) {
        res.json({
            msg: 'Admin credentials are not valid'
        })
    }
    next()
}

module.exports = adminMiddleware;