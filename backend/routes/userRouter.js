const express = require("express")
const { registerUser, loginUser, logout } = require("../controllers/authController")
const router = express.Router();
const userModel = require("../models/user.model");
const Code = require("../models/code.model")
const { isLoggedIn } = require("../middlewares/isLoggedIn")
const { saveCode, getCode } = require('../controllers/codePen.js');
const { saveCCode, getCCode } = require('../controllers/code.js');
router.get('/', (req, res) => {
    res.send("Hey User how are u!")
})
router.post('/register', registerUser) //wrote this register user function inside controller
router.post('/login', loginUser) //wrote this register user function inside controller
router.post('/logout', logout)
router.get('/home', isLoggedIn, (req, res) => {
    res.status(200).json({ message: 'Welcome to the home page' });
});

router.get('/user', isLoggedIn, (req, res) => {
    // Assuming req.user is set by your authentication middleware
    // console.log("hey user", req.user);
    return res.json({ user: req.user });
});
router.get('/user/get-code', isLoggedIn, getCode);
router.post('/user/save-code', isLoggedIn, saveCode);

// router.post("/user/save-codes", isLoggedIn, async (req, res) => {
//     const { userId, language, code, input } = req.body;

//     try {
//         let existingCode = await Code.findOne({ user: userId, language });

//         if (existingCode) {
//             // Update the existing code
//             existingCode.code = code;
//             existingCode.input = input;
//             await existingCode.save();
//         } else {
//             // Create new code entry
//             const newCode = new Code({
//                 user: userId,
//                 language,
//                 code,
//                 input,
//             });
//             await newCode.save();
//         }

//         res.status(200).json({ message: "Code saved successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to save code" });
//     }
// });
// router.get("/get-code/:language", isLoggedIn, async (req, res) => {
//     try {
//         const userId = req.user._id; // Assuming user is already authenticated and req.user is populated
//         const language = req.params.language;

//         const codeEntry = await Code.findOne({ user: userId, language });
//         if (codeEntry) {
//             res.json({ code: codeEntry.code });
//         } else {
//             res.json({ code: "" }); // Return an empty string if no code is found
//         }
//     } catch (error) {
//         console.error("Error retrieving code:", error);
//         res.status(500).json({ error: "Failed to retrieve code" });
//     }
// });


router.post("/user/save-codes", isLoggedIn, saveCCode);
router.get("/user/get-codes/:language", isLoggedIn, getCCode);
module.exports = router;



