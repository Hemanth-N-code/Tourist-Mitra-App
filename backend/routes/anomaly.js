const express = require("express");
const router = express.Router();

// POST /api/anomaly
router.post("/", (req, res) => {
  const { lat, lon } = req.body;

  if (lat === undefined || lon === undefined) {
    return res.status(400).json({ status: "error", message: "Latitude and longitude required" });
  }

  // Example anomaly check:
  // Safe if latitude > 0, anomaly otherwise (replace with your AI model later)
  if (lat > 0) {
    res.json({ status: "safe", message: `Location safe! (Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)})` });
  } else {
    res.json({ status: "anomaly", message: "⚠️ Anomaly detected! Please check tourist safety." });
  }
});

module.exports = router;
