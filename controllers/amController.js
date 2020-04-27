const AccountManager = require('../models/accountManager');
const Recruiter = require('../models/recruiter'); 
const Job = require('../models/job'); 

exports.getRecruiters = (req, res, next) => {
    Recruiter.find()
        .then(recruiters => {
            console.log(recruiters);
            res.render('recruiters', {pageTitle: 'Recruiters', recruiters: recruiters, user: req.user, role:'account_manager'});
        })
        .catch(err => console.log(err));
};

exports.getDashboard = (req, res, next) => {
    Job.find()
        .then(jobs => {
            Recruiter.find()
                .then(recruiters => {
                    res.render('dashboard', {pageTitle:'Dashboard', jobs: jobs, recruiters: recruiters, user: req.user, role: 'account_manager'});
                })
                .catch(err => console.log(err));    
        })
        .catch(err => console.log(err));
};

exports.postDashboard = (req, res, next) => {
    console.log('done done done');
}