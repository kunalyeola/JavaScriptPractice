const Post= require("../modules/postdata")
const { post } = require("../routes/post")
const Data= require("../modules/getData")

exports.getPost =(req, res)=>{

    res.json({
        "res":"The message come from the controller"
    })
}

exports.getAllData= (req, res) => {
//     console.log(req.params.id);
//    resl = Data.getAllData(req.params.id)
//    res.send(resl);
   
    //resl= Data.getAllData()
    resl = Data.getAllData();
    console.log("result")
    console.log(resl)
    console.log("result")
    //res.json(resl)
    
}
exports.createpost = (req , res) =>{

    
    Post.postSchema(req.body)
  res.json({
      "res" : req.body
  })
  
}
