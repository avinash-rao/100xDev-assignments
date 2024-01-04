const {Admin, User} = require("../db");

async function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({ username });
    if (!user || password !== user.password) {
        res.json({
            msg: 'User credentials are not valid'
        })
    }
    next()
}

module.exports = userMiddleware;