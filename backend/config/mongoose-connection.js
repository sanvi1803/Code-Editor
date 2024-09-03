const mongoose = require("mongoose")
const config = require("config")
const dbgr = require("debug")("development:mongoose")

mongoose.connect(process.env.MONGODB_URI)
    .then(function () {
        dbgr("mongodb connected");
        console.log("connected");


    }).catch((err) => {
        dbgr(err, "error connecting");
    });

module.exports = mongoose.connection;