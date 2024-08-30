const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    default: "",
  },
  input: {
    type: String,
    default: "",
  },
}, { timestamps: true });

const Code = mongoose.model("Code", codeSchema);
module.exports = Code;
