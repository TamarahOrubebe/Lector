"use strict";
//Configure environment
if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

// Create database configuration settings
const config = {
	user: "AP-SQLadmin",
	password: process.env.DB_PASSWORD,
	server: "apsqldelta.database.windows.net",
	database: "lector",
	port: 1433,

	options: {
		trustedConnection: true,
		enableArithAbort: true,
	},
};

module.exports = config;
