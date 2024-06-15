const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

router.post('/submit', async (req, res) => {
  const { email, message } = req.body;

  try {
    const newContact = new Contact({ email, message });
    await newContact.save();

    // Send a thank-you email to the user (You need to implement this part)
    // ...

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
