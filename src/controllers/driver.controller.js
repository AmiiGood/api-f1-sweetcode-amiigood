const Driver = require("../models/driver.model");

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    return res.status(200).json(drivers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findOne({ driverId: req.params.id });
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    return res.status(200).json(driver);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createDriver = async (req, res) => {
  try {
    const driver = new Driver(req.body);
    const newDriver = await driver.save();
    return res.status(201).json(newDriver);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.updateDriver = async (req, res) => {
  try {
    const driver = await Driver.findOneAndUpdate(
      { driverId: req.params.id },
      req.body,
      { new: true }
    );

    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    return res.status(200).json(driver);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deleteDriver = async (req, res) => {
  try {
    const driver = await Driver.findOneAndDelete({ driverId: req.params.id });
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    return res.status(200).json({ message: "Driver deleted succesfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
