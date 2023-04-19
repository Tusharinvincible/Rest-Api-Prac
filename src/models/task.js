const mongoose = require("mongoose");
const validator = require("validator");

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(pass) {
      const len = pass.length;
      if (len <= 6) {
        throw new Error("Password is Less than 7");
      }
      const pos = pass.search("password");
      if (pos != -1) {
        throw new Error("Password is weak");
      }
    },
  },
});

module.exports = Task;
