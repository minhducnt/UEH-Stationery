const mysql = require('mysql2');
const express = require('express');
const dotenv = require('dotenv');
const { Connector } = require('@google-cloud/cloud-sql-connector');
const s = require('@google-cloud/storage');


dotenv.config( {path: 'src/.env'});

const app = express();

app.use(express.urlencoded({ extended: false})); //parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json()); //parse JSON bodies (as sent by API clients)

const connector = new Connector();
const clientOpts = connector.getOptions({
	instanceConnectionName: process.env.INSTANCE_CONNECTION_NAME,
	ipType: 'PUBLIC',
});
const pool = mysql.createPool({
	...clientOpts,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
});

/*const connection = mysql.createConnection({ 
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE,
	host: process.env.DATABASE_HOST,
});*/


pool.getConnection( (error) => {
	if(error) {
		console.log(error)
	} else {
		console.log("Connected to database successfully.")
	}
});

app.listen(5004, () => {
	console.log("Server started on Port 5004");
});

module.exports = pool;