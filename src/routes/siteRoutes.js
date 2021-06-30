"use strict";

const express = require('express');
const siteController = require('../controllers/siteController');

const router = express.Router();



//lector endpoints
router.get('/', siteController.getHome);
router.get('/learn/testformat', siteController.getTestFormat);
router.get('/learn/listening', siteController.getListening);
router.get('/learn/reading', siteController.getReading);
router.get('/learn/writing', siteController.getWriting);
router.get('/learn/speaking', siteController.getSpeaking);
router.get('/test/practicetests', siteController.getPracticeTests);
router.get('/test/practicetests/academictests', siteController.getAcademicTests);
router.get('/test/practicetests/generaltests', siteController.getGeneralTests);
router.get('/test/testresults', siteController.getTestResults);


//Export router
module.exports = router;