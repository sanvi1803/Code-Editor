const mongoose = require("mongoose")

const codePenSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    html: {
        type: String,
        default: ''
    },
    css: {
        type: String,
        default: ''
    },
    js: {
        type: String,
        default: ''
    },
}, { timestamps: true })

const codePen = mongoose.model('codePen', codePenSchema);
module.exports = codePen;