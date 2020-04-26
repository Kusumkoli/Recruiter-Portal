const Candidate = require('../models/candidate');
//const Recruiter = require('../models/recruiter'); 

exports.getCandidates = (req, res, next) => {
    Candidate.find()
        .then(candidates => {
            console.log(candidates);
            res.render('candidates', {pageTitle: 'Candidates', candidates: candidates, user: req.user, role:'recruiter'});
        })
        .catch(err => console.log(err));
};