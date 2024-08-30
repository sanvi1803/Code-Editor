const Code = require("../models/code.model");
const userModel = require("../models/user.model");

// Fetch code by populating the user with codes
async function getCCode(req, res) {
    try {
        const { language } = req.params;
        const user = await userModel.findById(req.user._id).populate('codes');
        console.log(user);

        if (!user || !user.codes.length) {
            return res.status(404).json({ error: "No code found for this user." });
        }

        
        const codeEntry = user.codes.find((code) => code.language === language);

        if (!codeEntry) {
            return res.status(404).json({ error: "No code found for this language" });
        }

        res.status(200).json({ code: codeEntry.code });
    } catch (error) {
        console.error('Error fetching code:', error);
        res.status(500).json({ error: 'Failed to fetch code' });
    }
}

// Save code for a specific language, ensuring user is updated
async function saveCCode(req, res) {
    try {
        const { language, code } = req.body;
        const user = await userModel.findById(req.user._id).populate('codes');
        // console.log(user.codes);
        // Create or update code for the user
        let codeDoc = await Code.findOneAndUpdate(
            { language, user: user._id },
            { code },
            { new: true, upsert: true }
        );

        // Update user model
        if (!user.codes.some(c => c._id.equals(codeDoc._id))) {
            user.codes.push(codeDoc._id);
            await user.save();
        }

        res.status(200).json({ message: 'Code saved successfully', code: codeDoc });
    } catch (error) {
        console.error('Error saving code:', error);
        res.status(500).send('Server error');
    }
}

module.exports = { saveCCode, getCCode };
