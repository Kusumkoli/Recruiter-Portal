const express = require('express');
const router = express.Router();
const amController = require('../controllers/amController');

router.get('/recruiters', amController.getRecruiters);

router.get('/amdashboard', amController.getDashboard);

router.post('/amdashboard', amController.postDashboard);
module.exports = router;