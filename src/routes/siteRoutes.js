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
router.get('/welcome', siteController.getWelcome);
router.get('/our-services/testformat', siteController.getTestFormat);
router.get('/our-services/listening', siteController.getListening);
router.get('/our-services/reading', siteController.getReading);
router.get('/our-services/writing', siteController.getWriting);
router.get('/our-services/speaking', siteController.getSpeaking);
router.get('/our-services/elocution', siteController.getElocution);
router.get('/test/practicetests', siteController.getPracticeTests);
router.get('/test/practicetests/academictests', siteController.getAcademicTests);
router.get('/test/practicetests/generaltests', siteController.getGeneralTests);
router.get('/test/testresults', siteController.getTestResults);
router.get('/bookings/pricing', userController.checkLoggedIn, siteController.getPricing);
router.get('/bookings/pricing/paymentinfo/checkout/success/', userController.checkLoggedIn, siteController.getSuccess);
router.get('/aboutus', siteController.getAboutUs);
router.get('/contactus', siteController.getContactUs);
router.post('/contactus',  siteController.handleMessage);
router.post('/bookings/pricing/paymentinfo', userController.checkLoggedIn, siteController.handlePricing);
router.post('/bookings/pricing/paymentinfo/checkout', siteController.handleCheckout);
router.post('/welcome/new-upload', upload.single('file'), siteController.handleUpload);


//Export router
module.exports = router;