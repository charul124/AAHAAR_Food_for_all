// models/NgoRegistrationForm.js
const mongoose = require('mongoose');

const ngoRegistrationFormSchema = new mongoose.Schema({
  NGOName: String,
  email: String,
  contactInfo: String,
  telephoneNo: String,
  description: String,
  AreaPincode: String,
  state: String,
  city: String,
  fullAddress: String,
  category: String,
  verificationNumber: String,
  DateOfEstablishment: String,
  website: String,
});

const NgoRegistrationForm = mongoose.model('NgoRegistrationForm', ngoRegistrationFormSchema);

module.exports = NgoRegistrationForm;
