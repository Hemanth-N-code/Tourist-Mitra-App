// routes/digitalId.js
const express = require("express");
const router = express.Router();
const crypto = require("crypto");

router.post("/", (req, res) => {
  const { name, passport, nationality, validity } = req.body;
  if (!name || !passport || !nationality || !validity) {
    return res.status(400).json({ message: "All fields required" });
  }

  // Generate blockchain-style hash
  const data = `${name}-${passport}-${nationality}-${validity}-${Date.now()}`;
  const hash = "0x" + crypto.createHash("sha256").update(data).digest("hex");

  res.json({ name, passport, nationality, validity, hash });
});

module.exports = router;
