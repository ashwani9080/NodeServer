var express = require("express");
var router  = express.Router();
var userdb = require("./userschema")


router.get("/user",function(req,res){
    res.send("running")
    
     });
      
    router.post("/adduser",(req,res)=>{
      console.log("data",req.body)
userdb.create(req.body,function(err,result){
if(err){
    res.send(err)
}else{
    console.log("result")
}



})


    })

    module.exports = router;
