// const userModel = require("../models/user.model")
// const jwt = require("jsonwebtoken")
// async function isLoggedIn(req, res, next) {
//     if (!req.cookies.token) {
//         // res.flash("error", "you need to login first")
//         //this means that the above flash error message can also be used inside '/' route since it goes with it
//         res.redirect("/")
//         return res.status(401).send('You need to login first');

//     }
//     try {
//         let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
//         let user = await userModel
//             .findOne({ email: decoded.email })
//             .select("-password");//this means that get all data of user except password
//         req.user = user;
//         next();
//     } catch (error) {
//         // res.flash("error", "something went wrong")
//         res.redirect("/")
//     }

// }
// module.exports = { isLoggedIn }

const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const isLoggedIn = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Access Denied: Please login." });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // console.log('Decoded JWT:', decoded);
        const user = await userModel.findOne({ email: decoded.email })
            .select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });
        req.user = user;
        next();
    } catch (error) {
        // console.log('JWT verification failed:', error);
        return res.status(401).json({ message: "Invalid token. Please log in again." });
    }
};

module.exports = { isLoggedIn };
