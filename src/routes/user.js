"use strict";

//configure dotenv
require('dotenv').config();


// Dependencies
const express = require('express');
const userController = require("../controllers/userController");
const auth = require("../validation/validation");
const passport = require('passport');
const initPassportLocal = require('../controllers/passportControllers');


// Setup router
const router = express.Router();

initPassportLocal();


//USER ENDPOINTS

//Signup
router.get('/signup', userController.getSignup);
router.post("/signup", auth.validateSignup, userController.createUser);


//Login
router.get('/login', userController.checkLoggedOut, userController.getLogin);

router.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile", "email"],
	}),
);

router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }),
	function (req, res) {
		res.redirect("/welcome");
	},
);

router.get(
	"/auth/facebook",
	passport.authenticate("facebook", {
		scope: ["public_profile", "email"],
	}),
);

router.get(
	"/auth/facebook/callback",
	passport.authenticate("facebook", {
		successRedirect: "/welcome",
		failureRedirect: "/login",
	}),
);

router.get("/auth/twitter", passport.authenticate("twitter", { scope: ["profile", "email"] }));

router.get(
	"/auth/twitter/callback",
	passport.authenticate("twitter", {
		successRedirect: "/welcome",
		failureRedirect: "/login",
	}),
);



router.post('/login', passport.authenticate("local", {
    successRedirect: "/welcome",
    failureRedirect: "/login",
    successFlash: true,
    failureFlash: true
}));


//Logout
router.post('/logout', userController.postLogout);



//Export router
module.exports = router;
