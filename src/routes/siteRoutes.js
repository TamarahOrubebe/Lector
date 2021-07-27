"use strict";

const express = require('express');
const multer = require("multer");
const siteController = require('../controllers/siteController');
const userController = require('../controllers/userController');

const router = express.Router();



const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "../lector/userUploads");
	},

	filename: (req, file, cb) => {
		cb(null, Date.now() + "--" + file.originalname);
		
	},
});

const upload = multer({ storage: fileStorageEngine });


//lector endpoints
router.get('/', siteController.getHomePage);
router.get('/welcome', userController.checkLoggedIn, siteController.getWelcome);
router.get('/our-services/testformat', userController.checkLoggedIn, siteController.getTestFormat);
router.get('/our-services/listening', userController.checkLoggedIn, siteController.getListening);
router.get('/our-services/reading', userController.checkLoggedIn, siteController.getReading);
router.get('/our-services/writing', userController.checkLoggedIn, siteController.getWriting);
router.get('/our-services/speaking', userController.checkLoggedIn, siteController.getSpeaking);
router.get('/our-services/elocution', userController.checkLoggedIn, siteController.getElocution);
router.get('/test/practicetests', userController.checkLoggedIn, siteController.getPracticeTests);
router.get('/test/practicetests/academictests', userController.checkLoggedIn, siteController.getAcademicTests);
router.get('/test/practicetests/generaltests', userController.checkLoggedIn, siteController.getGeneralTests);
router.get('/test/testresults', userController.checkLoggedIn, siteController.getTestResults);
router.get('/bookings/pricing', userController.checkLoggedIn, siteController.getPricing);
router.post('/bookings/pricing/paymentinfo', userController.checkLoggedIn, siteController.handlePricing);
router.post('/bookings/pricing/paymentinfo/checkout', userController.checkLoggedIn, siteController.handleCheckout);
router.post('/welcome/new-upload', upload.single('file'), siteController.handleUpload);


//Export router
module.exports = router;