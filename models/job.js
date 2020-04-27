const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    job_id: {
        type: Number,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    experience_level: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Full Time', 'Part Time', 'Work from Home']
    },
    vacancies: {
        type: Number,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Job', jobSchema);