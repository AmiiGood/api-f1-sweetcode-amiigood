const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    driverId: {
      type: String,
      required: true,
      unique: true,
    },
    driverRef: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      default: null,
    },
    code: {
      type: String,
      default: null,
    },
    forename: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Driver", driverSchema);
