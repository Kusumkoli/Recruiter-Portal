const AccountManager = require('../models/accountManager');
const Recruiter = require('../models/recruiter');
const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getLogin = (req, res, next) => {
    res.render('login', {pageTitle: 'Recruiter Sign In', email:false, pw:false});
};

exports.getSignup = (req, res, next) => {
    res.render('login', {pageTitle: 'Recruiter Sign Up', email:false, pw:false});
};

exports.getAMSignin = (req, res, next) => {
    res.render('login', {pageTitle: 'Account Manager Sign In', email:false, pw:false});
};

exports.postRSignup = (req, res, next) => {
    var date = new Date();
    const email = req.body.email;
    const password = Bcrypt.hashSync(req.body.password, 10);
    const username = req.body.username;
    const profile_type = req.body.profile_type;
    const experience_level = req.body.experience_level;
    const hours = req.body.hours;
    const location = req.body.location;
    const newRecruiter = new Recruiter({ 
        register_date: date,
        name: username,
        email: email, 
        password: password,
        profile_type: profile_type,
        experience_level: experience_level,
        hours: hours,
        location: location 
    });
    newRecruiter.save();
    console.log('New Recruiter Added!');
};

exports.postRSignin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    Recruiter.findOne({email: email})
        .then(result => {
            if(!result) {
                //console.log(result.password);
                return res.render('login', {pageTitle: 'Recruiter Sign In', email:true, pw:false});
            }
            console.log(result);
            if(!Bcrypt.compareSync(password, result.password)) {
                return res.render('login', {pageTitle: 'Recruiter Sign In', email:false, pw:true});
            }
            console.log("The email and password combination is correct!");
            res.render('dashboard', {pageTitle:'Dashboard'});
        })
        .catch(err => console.log(err));
};

exports.postAMSignin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    AccountManager.findOne({email: email})
        .then(result => {
            if(!result) {
                console.log(result.password);
                return res.render('login', {pageTitle: 'Account Manager Sign In', email:true, pw:false});
            }
            if(result) {
                console.log(result);
                if(!Bcrypt.compareSync(password, result.password)) {
                    return res.render('login', {pageTitle: 'Account Manager Sign In', email:false, pw:true});
                }
            }
            console.log("The email and password combination is correct!");
            res.render('dashboard', {pageTitle:'Dashboard'});
        })
        .catch(err => console.log(err));
};
