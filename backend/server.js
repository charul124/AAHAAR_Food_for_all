// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const loggerMiddleware = require('./middleware/loggerMiddleware');
// const ngoRoutes = require('./routes/ngoRoutes');
// const contactRoutes = require('./routes/contactRoutes');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const Contact = require('./models/contactModel'); // Assuming you have a Contact model

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(loggerMiddleware);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Increase payload limit for body-parser (adjust the limit as needed)
// app.use(express.json({ limit: '10mb' }));

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
// });

// // Nodemailer Configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// // Contact Form Submission Endpoint
// app.post('/api/contact', async (req, res) => {
//   try {
//     // Save form data to MongoDB
//     const { email, message } = req.body;
//     const contact = new Contact({ email, message });
//     await contact.save();

//     // Send Thank-You Email
//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: email,
//       subject: 'Thank You for Contacting Us!',
//       text: 'We have received your message. Thank you!',
//     };

//     await transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//       } else {
//         console.log('Email sent:', info.response);
//       }
//     });

//     res.status(200).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Testing Email Sending Endpoint
// app.post('/api/test-email', async (req, res) => {
//   try {
//     // Simulate form data (replace with your test data)
//     const testData = {
//       email: 'test@example.com',
//       message: 'This is a test message for email sending.',
//     };

//     // Save form data to MongoDB (optional, for testing purposes)
//     const { email, message } = testData;
//     const contact = new Contact({ email, message });
//     await contact.save();

//     // Send Test Email
//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: testData.email,
//       subject: 'Test Email',
//       text: 'This is a test email. If you receive this, email sending is working!',
//     };

//     await transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending test email:', error);
//         res.status(500).json({ error: 'Error sending test email' });
//       } else {
//         console.log('Test Email sent:', info.response);
//         res.status(200).json({ message: 'Test Email sent successfully' });
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Run the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// // Use Routes
// app.use('/api', ngoRoutes);
// app.use('/api/contact', contactRoutes);

// // Run the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const ngoRoutes = require('./routes/ngoRoutes');
const contactRoutes = require('./routes/contactRoutes');
const foodbanksFormRoutes = require('./routes/foodRegistrationFormRoutes'); 
const ngoRegistrationFormRoutes = require('./routes/ngoRegistrationFormRoutes');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const Contact = require('./models/contactModel'); // Assuming you have a Contact model

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Increase payload limit for body-parser (adjust the limit as needed)
app.use(express.json({ limit: '10mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {});

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Contact Form Submission Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Save form data to MongoDB
    const { email, message } = req.body;
    const contact = new Contact({ email, message });
    await contact.save();

    // Send Thank-You Email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Thank You for Contacting Us!',
      text: 'We have received your message. Thank you!',
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Testing Email Sending Endpoint
app.post('/api/test-email', async (req, res) => {
  try {
    // Simulate form data (replace with your test data)
    const testData = {
      email: 'heemaang.saxena18@gmail.com',
      message: 'This is a test message for email sending.',
    };

    // Save form data to MongoDB (optional, for testing purposes)
    const { email, message } = testData;
    const contact = new Contact({ email, message });
    await contact.save();

    // Send Test Email
    const mailOptions = {
      from: 'aahaarfoodhelp2023@gmail.com',
      to: testData.email,
      subject: 'Test Email',
      text: 'This is a test email. If you receive this, email sending is working!',
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending test email:', error);
        res.status(500).json({ error: 'Error sending test email' });
      } else {
        console.log('Test Email sent:', info.response);
        res.status(200).json({ message: 'Test Email sent successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Use Routes
app.use('/api', ngoRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ngo-registration-form', ngoRegistrationFormRoutes);
app.use('/api/foodbanks-form', foodbanksFormRoutes);
// Run the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
