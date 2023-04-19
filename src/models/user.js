const mongoose = require("mongoose");
const validator = require("validator");
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(email) {
      if (!validator.isEmail(email)) {
        throw new Error("Email Not Valid");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age Cannot Be Negative");
      }
    },
  },
});

module.exports = User;
