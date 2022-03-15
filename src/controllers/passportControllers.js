"use strict";

//configure dotenv
require("dotenv").config();
 
//Dependencies
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const db = require('../db/userOperations');
const bcrypt = require("bcrypt");

  

let initPassportLocal = () => {

    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    },
        
        async (req, email, password, done) => {
            try {
                let user = await db.getUser(email);
                user = user[0];
;
                if (!user) {
                    return done(null, false, req.flash("errors", `The user with ${email} does not exist`));
                }

                if (user) {
                    
                    if (await bcrypt.compare(password, user.password)) {
                        return done(null, user, null);
                    } else {
                        return done(
                            null,
                            false,
                            req.flash(
                                "errors",
                                "The password you entered is incorrect",
                            ),
                        );
                    }
                }
               
            } catch (err) {
                return done(null, false, err);
            }
        }
    ));
}


passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "https://lektore.herokuapp.com/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			db.getUserByProfileId(profile.id)
				.then((user) => {
					if (!user) {
						db.createUser(
							profile.id,
							profile.displayName,
							profile.emails[0].value,
						);

						db.getUser(profile.emails[0].value).then((user) => {
                            return done(null, user);
						});
					}

					return done(null, user);
				})
				.catch((err) => {
					return done(err, null);
				});
		},
	),
);

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL:
				"https://lektore.herokuapp.com/auth/facebook/callback",
			profileFields: ["id", "emails", "displayName"],
		},
		function (accessToken, refreshToken, profile, done) {
			db.getUserByProfileId(profile.id)
				.then((user) => {
					console.log(profile);
					if (!user) {
						db.createUser(
							profile.id,
							profile.displayName,
							profile.emails[0].value,
						);

						db.getUser(profile.emails[0].value).then((user) => {
							return done(null, user);
						});
					}

					return done(null, user);
				})
				.catch((err) => {
					return done(err, null);
				});
		},
	),
);

passport.use(
	new TwitterStrategy(
		{
			consumerKey: process.env.TWITTER_CONSUMER_KEY,
			consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
			callbackURL:
				"https://lektore.herokuapp.com/auth/twitter/callback",
		},
		function (token, tokenSecret, profile, done) {
			db.getUserByProfileId(profile.id)
				.then((user) => {
					console.log(profile);
					console.log(user);

					if (!user) {
						db.createUser(profile.id, profile.displayName, profile.username);

						db.getUserByProfileId(profile.id).then((user) => {
							return done(null, user);
						});
					}

					done(null, user);
				})
				.catch((err) => {
					return done(err, null);
				});
		},
	),
);

passport.serializeUser((user, done) => {
    console.log(user);

    return done(null, user.Id);
});
    
passport.deserializeUser((Id, done) => {
    db.getUserById(Id).then(user => {
        return done(null, user);
    }).catch(err => {
        return done(err, null);
    })
    
    
});





module.exports = initPassportLocal;