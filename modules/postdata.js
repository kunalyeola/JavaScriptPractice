const con = require("../database")

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO task (posts) VALUES ("+)";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });


exports.postSchema = (req) =>{
console.log(req)
try{
conn=con.getConnection()
// var sql = "Insert into task(posts) values ("+req.body+" )";
conn.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});
}
catch{
  console.log("Error occured during the Inserting the data")
}}