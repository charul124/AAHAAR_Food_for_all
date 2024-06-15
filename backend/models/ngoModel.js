const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  STATE: String,
  CITY: String,
  PINCODE: Number,
  NGO: {
    type: String,
    unique: true, 
  },
  ADDRESS: String,
  CONTACT: String,
  DESCRIPTION: String,
  LINK: String,
});

const Ngo = mongoose.model('Ngo', ngoSchema);

module.exports = Ngo;
