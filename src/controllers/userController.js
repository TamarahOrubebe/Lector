"use strict";


const userController = {

};

userController.getSignup = (req, res) => {
    res.render("signup", {
			css: "/css/signup.css",
			src: "/js/script.js"
		});
};


userController.postSignup = (req, res) => {
    res.render("signup" );
};


userController.getLogin = (req, res) => {
    res.render("login", {
			css: "/css/login.css",
			src: "/js/script.js"
		});
};


userController.postLogin = (req, res) => {
    
    res.render('login');
};



userController.getLogout = (req, res) => {
    req.logout();
    res.redirect('/');
};

module.exports = userController;