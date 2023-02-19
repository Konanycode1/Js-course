const mysql = require('mysql2');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "api_express",
});
conn.connect();
module.exports = conn;