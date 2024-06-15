const express = require('express');
const router = express.Router();
const ngoController = require('../controllers/ngoController');

router.get('/ngos', ngoController.getAllNgos);
router.post('/ngos', ngoController.createNgo);

module.exports = router;
