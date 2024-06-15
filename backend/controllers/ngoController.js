const Ngo = require('../models/ngoModel');

const getAllNgos = async (req, res) => {
  try {
    const ngos = await Ngo.find();
    res.json(ngos);
  } catch (error) {
    console.error('Error fetching NGOs:', error);
    res.status(500).send('Internal Server Error');
  }
};

// const createNgo = async (req, res) => {
//   try {
//     const newNgo = new Ngo(req.body);
//     const savedNgo = await newNgo.save();
//     res.json(savedNgo);
//   } catch (error) {
//     console.error('Error creating NGO:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };

// const createNgo = async (req, res) => {
//     try {
//       const newNgos = await Ngo.insertMany(req.body);
//       res.json(newNgos);
//     } catch (error) {
//       console.error('Error creating NGOs:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   };
const createNgo = async (req, res) => {
    try {
      // Handle both single and multiple NGOs
      const ngosData = Array.isArray(req.body) ? req.body : [req.body];
  
      const createdNgos = await Ngo.create(ngosData);
      res.json(createdNgos);
    } catch (error) {
      console.error('Error creating NGO:', error);
      res.status(500).send('Internal Server Error');
    }
  };

module.exports = {
  getAllNgos,
  createNgo,
};
