const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    code: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'codePen'
    },
    codes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Code'  // References the 'Code' model
    }]
}, { timestamps: true })

const user = mongoose.model("user", userSchema);
module.exports = user