"use strict";

//Configure environment
    require('dotenv').config();

//Dependencies    
const express = require('express');
const session = require('express-session');
const ejs = require('ejs');
const cors = require('cors');
const passport = require('passport');
const userRouter = require('./src/routes/user');
const siteRouter = require('./src/routes/siteRoutes');


//Define PORT
const PORT = process.env.PORT || 3000;


//Create app
const app = express();

//SETUP MIDDLEWARE

//Body parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Static files
app.use(express.static('public'));

//Enable cors for all routes
app.use(cors());


//Setup view engine
app.set('view engine', 'ejs')


//Enable session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

//Enable passport
app.use(passport.initialize())
app.use(passport.session());


//Router middleware
app.use(userRouter);
app.use(siteRouter);


//Listen 
app.listen(PORT, (req, res) => {
    console.log(`server started on port ${PORT}`);
});