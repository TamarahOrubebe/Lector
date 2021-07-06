const { check } = require("express-validator");

const validateSignup = [

    check("email",  "Invalid email" ).isEmail().trim(),

    check("password", "Invalid password. Password must be at least 2 characters long" ).isLength({ min: 2 }),
    
    check("confirmationPassword", "Password confirmation does not match password" ).custom((value, { req } ) => {
                
        return value === req.body.password;
            
    })
        
];

module.exports = { validateSignup };