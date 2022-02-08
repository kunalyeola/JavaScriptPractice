const res = require("express/lib/response");
const con = require("../database")

exports.getAllData =async () =>{

    try{
        conn=con.getConnection()
        // var sql = "select * from task ";//where id = "+req.params.id;\
         console.log()
         conn.query("SELECT * FROM task  ", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            //console.log(fields)
            //return result;
            res.send(result)
          return 
          }); 
    }catch(error){
        console.log(error.message);
        throw error
    }

   


    }
    