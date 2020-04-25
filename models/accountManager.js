const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountManagerSchema = new Schema({
    employee_id : {
        type: String,
        required: true
    },
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
    location : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AccountManager', accountManagerSchema);