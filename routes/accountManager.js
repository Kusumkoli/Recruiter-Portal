const express = require('express');
const router = express.Router();
const amController = require('../controllers/amController');

router.get('/recruiters', amController.getRecruiters);

module.exports = router;