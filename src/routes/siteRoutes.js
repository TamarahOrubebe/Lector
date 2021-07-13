"use strict";

const express = require('express');
const siteController = require('../controllers/siteController');
const userController = require('../controllers/userController');

const router = express.Router();



//lector endpoints
router.get('/', siteController.getHome);
router.get('/homepage', userController.checkLoggedIn, siteController.getHomePage);
router.get('/our-services/testformat',userController.checkLoggedIn, siteController.getTestFormat);
router.get('/our-services/listening', userController.checkLoggedIn, siteController.getListening);
router.get('/our-services/reading', userController.checkLoggedIn, siteController.getReading);
router.get('/our-services/writing', userController.checkLoggedIn, siteController.getWriting);
router.get('/our-services/speaking', userController.checkLoggedIn, siteController.getSpeaking);
router.get('/test/practicetests', userController.checkLoggedIn, siteController.getPracticeTests);
router.get('/test/practicetests/academictests', userController.checkLoggedIn, siteController.getAcademicTests);
router.get('/test/practicetests/generaltests', userController.checkLoggedIn, siteController.getGeneralTests);
router.get('/test/testresults', userController.checkLoggedIn, siteController.getTestResults);
router.get('/bookings/pricing', userController.checkLoggedIn, siteController.getPricing);


//Export router
module.exports = router;