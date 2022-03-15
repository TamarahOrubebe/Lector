"use strict";

//Dependencies
const config = require('./dbconfig');
const sql = require('mssql');


//Create db Object
const db = {};


//Get all users
db.getUsers = async () => {
    
    try {

        let pool = await sql.connect(config);
        let users = await pool.request().query("SELECT * FROM [Users]");

        return users.recordsets;

    } catch (error) {
        console.log(error);
    }
};


//Get a user
db.getUser = async (email) => {

    try {

        let pool = await sql.connect(config);
        let user = await pool.request().query(
            `SELECT * FROM [Users] WHERE email = '${email}'
            `)
        
        return user.recordset;

    } catch (error) {
        console.log(error)
    }
};

//Get a user by id
db.getUserById = async (id) => {
	try {
		let pool = await sql.connect(config);
		let user = await pool.request().query(
			`SELECT * FROM [Users] WHERE id = '${id}'
            `,
		);

		return user.recordset;
	} catch (error) {
		console.log(error);
	}
};

//Get a user by id
db.getUserByProfileId = async (id) => {
	try {
		let pool = await sql.connect(config);
		let user = await pool.request().query(
			`SELECT * FROM [Users] WHERE profileId = '${id}'
            `,
		);

		return user.recordset;
	} catch (error) {
		console.log(error);
	}
};




//Create a user
db.createUser = async (profileId, username, email, password) => {

    try {

        let pool = await sql.connect(config);
        let insertUser = await pool
            .request()
            .query(
                `INSERT INTO [Users](profileId, username, email, password)
                VALUES('${profileId}', '${username}', '${email}', '${password}')`
            );
        
        return insertUser.recordsets;

    } catch (error) {
        console.log(error)
    }
    
};


let a;


module.exports = db;
