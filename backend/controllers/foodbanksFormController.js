// foodbanksFormController.js
const FoodbanksForm = require('../models/foodbanksModel');

exports.submitFoodbanksForm = async (req, res) => {
  try {
    const foodbanksForm = new FoodbanksForm(req.body);
    await foodbanksForm.save();
    res.status(200).json({ message: 'FoodbanksForm submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
