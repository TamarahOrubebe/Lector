"use strict";
//Configure environment
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

// Create database configuration settings
const config = {
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	server: process.env.DB_SERVER,
	database: process.env.DB_DATABASE,
	port: 1433,

	options: {
		trustedConnection: true,
		enableArithAbort: true,
	},
};

module.exports = config;
