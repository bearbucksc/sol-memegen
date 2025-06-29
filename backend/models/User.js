const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true },
  email: { type: String, unique: true },
  password: String,
  subscription: {
    plan: { type: String, default: 'free' },
    expiresAt: Date,
    paid: Boolean
  },
  websiteId: String
});

module.exports = mongoose.model('User', userSchema);
