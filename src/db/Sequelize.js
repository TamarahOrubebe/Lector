"use strict";

const { Sequelize } = require("sequelize");
const connection = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		// Defining our connect by Sequelize constructor
		host: process.env.DB_SERVER,
		dialect: "mssql", // According to which dbms you are using
	},
);

// var user = sequelize.define(
// 	"user",
// 	{
// 		/* bla */
// 	},
// 	{
// 		// don't add the timestamp attributes (updatedAt, createdAt)
// 		timestamps: false,
// 		// your other configuration here
// 	},
// );
const User = connection.define("users", {
	
	id: {
		type: Sequelize.BIGINT, // All dataTypes format available here http://bit.ly/2ofwgAm
		primaryKey: true,
		autoIncrement: true,
	},
	username: Sequelize.TEXT,
	password: Sequelize.TEXT,
}, {timestamps: false}
);

// Syncing all our model to our DB
connection.sync().then(() => {
	console.log("Connected to DB");
});

module.exports = User; // Exporting our user model
