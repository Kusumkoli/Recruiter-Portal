const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    experience_level: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    additional_skills: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Candidate', candidateSchema);