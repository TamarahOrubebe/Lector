"use strict";

const express = require('express');
const siteController = require('../controllers/siteController');
const userController = require('../controllers/userController');

const router = express.Router();



//lector endpoints
router.get('/', siteController.getHome);
router.get('/homepage', userController.checkLoggedIn, siteController.getHomePage);
router.get('/learn/testformat',userController.checkLoggedIn, siteController.getTestFormat);
router.get('/learn/listening', userController.checkLoggedIn, siteController.getListening);
router.get('/learn/reading', userController.checkLoggedIn, siteController.getReading);
router.get('/learn/writing', userController.checkLoggedIn, siteController.getWriting);
router.get('/learn/speaking', userController.checkLoggedIn, siteController.getSpeaking);
router.get('/test/practicetests', userController.checkLoggedIn, siteController.getPracticeTests);
router.get('/test/practicetests/academictests', userController.checkLoggedIn, siteController.getAcademicTests);
router.get('/test/practicetests/generaltests', userController.checkLoggedIn, siteController.getGeneralTests);
router.get('/test/testresults', userController.checkLoggedIn, siteController.getTestResults);


//Export router
module.exports = router;