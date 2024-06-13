const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    requires: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "Anonymous",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: false,
  },
});

module.exports = new mongoose.model("Blog", blogSchema);
