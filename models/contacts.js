const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  messages: {
    type: "Array",
    default: [],
  },
});

const Contacts = mongoose.model("Contacts", fileSchema);

module.exports = Contacts;
