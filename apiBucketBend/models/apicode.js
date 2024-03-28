// models/apiCode.js

const mongoose = require('mongoose');

const apiCodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  codeSnippet: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ApiCode', apiCodeSchema);
