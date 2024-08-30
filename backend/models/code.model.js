const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
    language: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',  // Reference back to the user who owns this code
        required: true
    }
}, { timestamps: true });

const Code = mongoose.model("Code", codeSchema);
module.exports = Code;
