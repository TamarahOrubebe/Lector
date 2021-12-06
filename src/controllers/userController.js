"use strict";

//Dependencies
const db = require("../db/userOperations");
const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const { user } = require("../db/dbconfig");
const saltRounds = 10;





//Create userController Object.
const userController = {

};

userController.getSignup = (req, res) => {
    res.render("signup", {
			css: "/css/signup.css",
			src: "/js/script.js",
			errors: req.flash("errors"),
			title: "Signup",
		});
    
};


userController.createUser = (req, res) => {

    //Validate all required fields
    let errorsArr = [];
    let validationErrors = validationResult(req);

    console.log(validationResult(req));

    if (!validationErrors.isEmpty()) {

        let errors = Object.values(validationErrors.mapped());

        errors.forEach(item => {
            errorsArr.push(item.msg);
            console.log(item);
        });

        req.flash("errors", errorsArr);
      
        return res.redirect("/signup");
    
    }

    const { profileId, username, email, password} = req.body;

    db.getUser(email).then((result) => {
        if (result[0]) {
            errorsArr.push(`A user with ${email} already exists. Please use another email.`)
            req.flash("errors", errorsArr);
            return res.redirect("/signup");
        } else {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                db.createUser(profileId, username, email, hash).catch((err) =>
                    console.log(err),
                );
            });

            return res.redirect("/login");
        }
    });

    
};


userController.checkLoggedIn = (req, res, next) => {

    if (!req.isAuthenticated()) {
        return res.redirect("/login")
    }

    next();
};

userController.getLogin = (req, res) => {

    return res.render("login", {
			css: "/css/login.css",
			src: "/js/script.js",
			errors: req.flash("errors"),
			title: "Login",
		});
};





userController.checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
       return  res.redirect("/welcome");
    }
    next();
};



userController.postLogout = (req, res) => {
    req.session.destroy(err => res.redirect("/login"))
    
};



userController.resetPassword = (req, res) => {

}


module.exports = userController;