"use strict";

//Configure environment
    require('dotenv').config();

//Dependencies    
const express = require('express');
const session = require('express-session');
const ejs = require('ejs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectFlash = require('connect-flash');
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
app.set('view engine', 'ejs');

//Enable cookieParse
app.use(cookieParser(process.env.SECRET));

//Configure session
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 //86400000 1 day
    }
}));

//Enable Flash message 
app.use(connectFlash());



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



