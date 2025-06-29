const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');
const websiteRoutes = require('./routes/website');

dotenv.config();
app.use(cors());
app.use(express.json());

// DB Connection
require('./config/db');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/website', websiteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
