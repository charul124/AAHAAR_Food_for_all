// controllers/ngoRegistrationFormController.js
const NgoRegistrationForm = require('../models/NgoRegistrationForm');

exports.registerNgoRegistrationForm = async (req, res) => {
  try {
    const formData = req.body;
    const ngoRegistrationForm = new NgoRegistrationForm(formData);
    await ngoRegistrationForm.save();

    // You can add additional logic here, e.g., send confirmation email

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
