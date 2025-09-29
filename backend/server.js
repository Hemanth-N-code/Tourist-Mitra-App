require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/reports');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 5000;
const digitalIdRoutes = require("./routes/digitalId");
app.use("/api/digital-id", digitalIdRoutes);
const anomalyRoutes = require("./routes/anomaly");
app.use("/api/anomaly", anomalyRoutes);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uploadDir = process.env.UPLOAD_DIR || 'uploads';
app.use('/uploads', express.static(path.join(__dirname, uploadDir)));

app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => res.json({ ok: true }));

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sih_backend';
mongoose.connect(MONGO_URI)
  .then(()=> app.listen(PORT, ()=> console.log('Server on', PORT)))
  .catch(e=> { console.error(e); process.exit(1); });
