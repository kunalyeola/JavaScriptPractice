const express = require("express")
const app = express()
const mysql= require("mysql")
const postRoutes = require("./routes/post")
const morgan= require("morgan")
const dotenv= require("dotenv")
const body_parser= require("body-parser")
dotenv.config()
const con = require("./database")

//connection with database 
// var con = mysql.createConnection({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database :"winjit"
//   });
// checking connection with database 
// try{
//     conn = con.getConnection()
//     console.log(" Connected with database")
// }
// catch{
//     console.log("Error Occurred when connecting to database")
// }



const myMiddelWere =(req, res, next) =>{
    console.log("This is my own middelwere") 
}
app.use(body_parser.json())
app.use("/" , postRoutes);
app.use(morgan("dev"))
app.use(myMiddelWere)
const port= process.env.PORT || 8080
app.listen(port,()=>{ console.log("This API call from port",port)})