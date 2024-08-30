const mongoose = require("mongoose")
const config = require("config")
const dbgr = require("debug")("development:mongoose")

mongoose.connect(`mongodb://127.0.0.1:27017/code-editor`)
    .then(function () {
        dbgr("mongodb connected");

    }).catch((err) => {
        dbgr(err, "error connecting");
    });

module.exports = mongoose.connection;