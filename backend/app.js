// app.js (Express backend with MongoDB + Twilio)
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import anomalyRoutes from "./routes/anomaly.js";
import twilio from "twilio";   // ✅ Import Twilio

// ✅ Initialize app FIRST
const app = express();

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/anomaly", anomalyRoutes);

// 🔗 Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/sih_backend", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ✅ Define Schemas & Models
const digitalIDSchema = new mongoose.Schema({
  name: String,
  nationality: String,
  passport: String,
  validity: Number,
});

const helpRequestSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  time: { type: Date, default: Date.now },
});

const sosSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  time: { type: Date, default: Date.now },
});

const DigitalID = mongoose.model("DigitalID", digitalIDSchema);
const HelpRequest = mongoose.model("HelpRequest", helpRequestSchema);
const SOS = mongoose.model("SOS", sosSchema);

// 🔑 Twilio setup (replace with your real credentials)
const accountSid = "your key";
const authToken = "your token";
const client = twilio(accountSid, authToken);
const twilioNumber = "your twilio no"; // your Twilio number

// 🌐 API Routes

// Get latest Digital ID
app.get("/api/digital-id/latest", async (req, res) => {
  const id = await DigitalID.findOne().sort({ _id: -1 });
  res.json(id || { message: "No Digital ID found" });
});

// Save/Update Digital ID
app.post("/api/digital-id", async (req, res) => {
  const { name, nationality, passport, validity } = req.body;

  // create fake blockchain hash (for demo)
  const hash = Math.random().toString(36).substring(2, 15);

  const newID = new DigitalID({ name, nationality, passport, validity });
  await newID.save();

  res.json({ name, nationality, passport, validity, hash });
});

// Log help request
app.post("/api/help-requests", async (req, res) => {
  const { lat, lon } = req.body;
  const help = new HelpRequest({ lat, lon });
  await help.save();
  res.json({ status: "Help request logged" });
});

// 🚨 SOS request (with SMS + DB logging)
app.post("/api/sos", async (req, res) => {
  const { lat, lon, phone } = req.body;

  try {
    // Save SOS to DB
    const sos = new SOS({ lat, lon });
    await sos.save();

    // Send SMS via Twilio
    await client.messages.create({
      body: `🚨 SOS Alert! Location: ${lat}, ${lon}`,
      from: twilioNumber,
      to: phone, // phone number from frontend
    });

    res.json({ success: true, message: "🚨 SOS sent and logged successfully!" });
  } catch (err) {
    console.error("❌ SOS Error:", err);
    res.status(500).json({ success: false, message: "Failed to send SOS" });
  }
});

// Start server
app.listen(5000, () =>
  console.log("✅ Backend running on http://localhost:5000")
);
