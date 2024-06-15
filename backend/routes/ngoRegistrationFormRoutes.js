// routes/ngoRegistrationFormRoutes.js
const express = require('express');
const router = express.Router();
const ngoRegistrationFormController = require('../controllers/ngoRegistrationFormController');

router.post('/register', ngoRegistrationFormController.registerNgoRegistrationForm);

module.exports = router;
