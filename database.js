const mysql = require("mysql")
const dotenv= require("dotenv").config()

exports.getConnection = () =>{

    return con

}
console.log(process.env.host);
console.log(process.env.user);
 const con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database : process.env.database
  });

//   module.exports = con; 