const codePenModel = require("../models/codepen.model");
const userModel = require("../models/user.model");
async function getCode(req, res) {
    try {
        const user = await userModel.findById(req.user._id).populate('code');
        // console.log('Populated User:', user);
        // console.log('User:', user);
        // console.log(req);
        console.log(user.code);

        if (user && user.code) {
            console.log('Code data:', user.code);
            res.json({
                html: user.code.html,
                css: user.code.css,
                js: user.code.js
            });
        } else {
            res.json({ html: '', css: '', js: '' });
        }
    } catch (error) {
        console.error('Error fetching code:', error);
        res.status(500).json({ error: 'Failed to fetch code' });
    }
}
async function saveCode(req, res) {
    try {
        const { html, css, js } = req.body;
        // console.log(html);

        let user = await userModel.findById(req.user._id);
        if (user.code) {
            // Update existing code
            await codePenModel.findByIdAndUpdate(user.code, { html, css, js });
        } else {
            // Create new code and associate it with the user
            const newCode = await codePenModel.create({ html, css, js, user: user._id });
            user.code = newCode._id;
            await user.save();
        }
        res.json({ message: 'Code saved successfully' });
    } catch (error) {
        console.error('Error saving code:', error);
        res.status(500).json({ error: 'Failed to save code' });
    }
}
module.exports = { saveCode, getCode }