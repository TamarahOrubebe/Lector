"use strict";

// Dependencies
const express = require('express');
const userController = require("../controllers/userController");


// Setup router
const router = express.Router();

//USER ENDPOINTS

//Signup
router.get('/signup', userController.signupGet);
router.post('/signup', userController.signupPost);


//Login
router.get('/login', userController.loginGet);
router.post('/login', userController.loginPost);


//Logout
router.get('/logout', userController.logoutGet);



//Export router
module.exports = router;
