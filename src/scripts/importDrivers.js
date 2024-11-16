// src/scripts/importDrivers.js

const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const Driver = require("../models/driver.model");

const csvPath = path.join(__dirname, "../data/drivers.csv");

async function importDrivers() {
  try {
    if (!fs.existsSync(csvPath)) {
      console.error(`El archivo CSV no existe en la ruta: ${csvPath}`);
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Driver.deleteMany({});
    console.log("Cleaned existing drivers");

    const results = [];

    await new Promise((resolve, reject) => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on("data", (data) => {
          const processedData = {};

          for (let [key, value] of Object.entries(data)) {
            processedData[key] = value === "\\N" || value === "" ? null : value;

            if (key === "number" && processedData[key] !== null) {
              processedData[key] = processedData[key].toString();
            }

            if (key === "dob" && processedData[key]) {
              processedData[key] = new Date(processedData[key]);
            }
          }

          results.push(processedData);
        })
        .on("end", async () => {
          try {
            await Driver.insertMany(results);
            console.log(`${results.length} drivers imported successfully`);
            resolve();
          } catch (error) {
            console.error("Error importing data:", error.message);
            reject(error);
          }
        })
        .on("error", (error) => {
          console.error("Error reading CSV:", error);
          reject(error);
        });
    });
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log("MongoDB connection closed");
    }
  }
}

importDrivers().catch(console.error);
