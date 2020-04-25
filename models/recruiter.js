const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recruiterSchema = new Schema({
    register_date : {
        type: Date,
        required: true,
    },
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    profile_type : {
        type: String,
        required: true
    },
    experience_level : {
        type: String,
        required: true
    },
    hours : {
        type: Number,
        required: true
    },
    location : [{
        type: String
    }]
});

module.exports = mongoose.model('Recruiter', recruiterSchema);