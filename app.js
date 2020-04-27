const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');

const loginRoutes = require('./routes/login');
const amRoutes = require('./routes/accountManager'); //Account Manager Controllers
const rRoutes = require('./routes/recruiter'); // Recruiter Controllers

require("dotenv").config({
    path: path.join(__dirname, "./.env")
   });

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(loginRoutes);
app.use(amRoutes);
app.use(rRoutes);
// app.use('/', errorController.get404Page);

const PORT = process.env.PORT || 2000;

mongoose.connect('mongodb+srv://kusumkoli:eJL107UOgWaBZyaq@cluster0-h9zxf.mongodb.net/recruiterportal?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the Database successfully');
        app.listen(PORT, () => {
            console.log('Server is listening on Port:', PORT)
          });
    });