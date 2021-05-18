const mongoose = require("mongoose");

const PerformanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  relation: {
    type: String
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  equipment: {
    type: String
  },
  song: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("performanceModel", PerformanceSchema);
