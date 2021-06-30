"use strict";


const userController = {

};

userController.signupGet = (req, res) => {
res.render('signup')
};


userController.signupPost = (req, res) => {
    res.render('signup');
};


userController.loginGet = (req, res) => {
    res.render('login');
};


userController.loginPost = (req, res) => {
    
    res.render('login');
};



userController.logoutGet = (req, res) => {
    req.logout();
    res.redirect('/');
};

module.exports = userController;