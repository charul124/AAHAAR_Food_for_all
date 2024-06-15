// foodbanksFormModel.js
const mongoose = require('mongoose');

const foodbanksFormSchema = new mongoose.Schema({
  FoodBankName: String,
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
  safetyMeasures: String,
  DateOfEstablishment: String,
  website: String,
});

const FoodbanksForm = mongoose.model('FoodbanksForm', foodbanksFormSchema);

module.exports = FoodbanksForm;
