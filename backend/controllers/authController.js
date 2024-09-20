const { generateToken } = require("../utils/generateToken");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

// Register user
async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        if (!name) {
            return res.status(400).json({ message: "Name fields are required." });
        }
        if (!email) {
            return res.status(400).json({ message: "email fields are required." });
        }
        if (!password) {
            return res.status(400).json({ message: "Password fields are required." });
        }


        // Check if user already exists
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(401).json({ message: "You already have an account, please login." });
        }
        // Hash password and create user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = await userModel.create({
            name,
            email,
            password: hashedPassword,
        });
        // Generate token and set cookie
        const token = generateToken(user);
        res.cookie("token", token, { httpOnly: true, secure: false }); // Set secure: true in production

        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: `Server error!,${error.message}` });
    }
}

// Login user
async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).send("Invalid credentials!");
        }
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Incorrect email or password!");
        }

        // Generate token and set cookie
        const token = generateToken(user);
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'None' }); // Set secure: true in production
        return res.status(200).json({
            message: "Logged In successfully",
            user: {
                name: user.name,
                email: user.email,
                // Add other user fields if needed
            }
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server error");
    }
}

// Logout user
async function logout(req, res) {
    try {
        res.cookie("token", "", { expires: new Date(0), httpOnly: true, secure: false }); // Set secure: true in production
        return res.status(200).send("Logged out successfully");
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Server error");
    }
}

module.exports = { registerUser, loginUser, logout };
