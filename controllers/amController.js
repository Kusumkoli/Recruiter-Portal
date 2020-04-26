const AccountManager = require('../models/accountManager');
const Recruiter = require('../models/recruiter'); 

exports.getRecruiters = (req, res, next) => {
    Recruiter.find()
        .then(recruiters => {
            console.log(recruiters);
            res.render('recruiters', {pageTitle: 'Recruiters', recruiters: recruiters, user: req.user, role:'account_manager'});
        })
        .catch(err => console.log(err));
};