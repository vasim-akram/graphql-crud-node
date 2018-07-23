const mongoose = require("mongoose");

// User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
