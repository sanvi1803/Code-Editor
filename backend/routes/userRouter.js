const express = require("express")
const { registerUser, loginUser, logout } = require("../controllers/authController")
const router = express.Router();
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
    return res.json({ user: req.user });
});

//Routes for CodePen
router.post('/user/save-code', isLoggedIn, saveCode);
router.get('/user/get-code', isLoggedIn, getCode);

// Routes for CodeForge
router.post("/user/save-codes", isLoggedIn, saveCCode);
router.get("/user/get-codes/:language", isLoggedIn, getCCode);
module.exports = router;