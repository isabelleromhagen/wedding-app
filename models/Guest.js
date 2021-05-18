const mongoose = require("mongoose");

const GuestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
  },
  bus: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now,
  },
  song: {
    type: String
  }
});

module.exports = mongoose.model("guestModel", GuestSchema);
