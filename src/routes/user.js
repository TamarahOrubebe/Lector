"use strict";

// Dependencies
const express = require('express');
const userController = require("../controllers/userController");


// Setup router
const router = express.Router();

//USER ENDPOINTS

//Signup
router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);


//Login
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);


//Logout
router.get('/logout', userController.getLogout);



//Export router
module.exports = router;
