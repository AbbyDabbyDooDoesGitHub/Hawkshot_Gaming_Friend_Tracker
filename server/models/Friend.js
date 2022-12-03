const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const friendSchema = new Schema({
  platform: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
    trim: true,
  },
  gamerName: {
    type: String,
    required: true,
    trim: true,
  },
  irl: {
    type: Boolean
  },
  notes: {
    type: String,
    maxlength: 200,
    trim: true,
  },
  // left this in because it could be cool to know when a friend was added
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Friend = model('Friend', friendSchema);

module.exports = Friend;
