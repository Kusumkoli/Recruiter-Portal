const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.getLogin);

router.get('/signup', loginController.getSignup);

router.get('/account-manager-signin', loginController.getAMSignin);

router.post('/recruiter-signup', loginController.postRSignup); // recruiter log in
 
router.post('/recruiter-signin', loginController.postRSignin); // recruiter sign in

router.post('/am-signin', loginController.postAMSignin); //account manager sign in

router.get('/dashboard', loginController.getDashboard);

module.exports = router;