const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "please enter a username"],
    },
    email: {
      type: String,
      required: [true, "please enter an email"],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema, "users");
