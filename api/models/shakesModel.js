const mongoose = require("mongoose");

const shakesSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shakeAuthor: {
      type: String,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "please add a title."],
      type: String,
      required: [true, "please add a title."],
    },
    recipe: {
      type: String,
      required: [true, "please fill every recipe."],
    },
    description: {
      type: String,
      required: [true, "please add a description."],
    },
    procedure: {
      type: String,
      required: [true, "please add some procedure."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shakes", shakesSchema, "shakes");
