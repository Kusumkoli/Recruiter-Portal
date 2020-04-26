const express = require('express');
const router = express.Router();
const rController = require('../controllers/rController');

router.get('/candidates', rController.getCandidates);

module.exports = router;