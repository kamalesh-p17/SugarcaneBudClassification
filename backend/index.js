import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import upload from "./middlewares/multer.middlewares.js";
import { Image } from "./module/image.module.js";
import cloudinaryModule from "cloudinary";
import fs from "fs";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const cloudinary = cloudinaryModule.v2;

const Port = process.env.PORT || 5001;

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// API creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

//  Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Creating Upload Image for prediction and store in DB
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    console.log("Image received");
    const uploaded = await cloudinary.uploader.upload(req.file.path);
    
    console.log(uploaded.secure_url)
    fs.unlinkSync(req.file.path);
    const response = await fetch('http://127.0.0.1:5002/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image_url: uploaded.secure_url }),
    });

    const prediction = await response.json();

    const newImage = new Image({
      Grade: prediction.class,
      image_URL: uploaded.secure_url
    });
    await newImage.save();
    console.log("URL uploaded in db");

    res.status(200).json({
      success : true,
      uploaded_url: uploaded.secure_url,
      prediction,
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('Upload or Prediction Failed');
  }
});

// Fetch All Images
app.get("/all_image", async (req, res) => {
  try {
    const data = await Image.find({});
    res.status(200).json(data); // Use 200 for successful data retrieval
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving images",
      error: error.message
    });
  }
});

app.listen(Port, '0.0.0.0',() => {
  console.log(`Server running on port ${Port}`);
});
