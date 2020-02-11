let express=require('express');
let mongoose=require('mongoose');
let app=express();
var bodyParser = require('body-parser')
var router = require("./router");

// create application/json parser
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost:27017/databasename', {useNewUrlParser: true ,useUnifiedTopology: true });

app.use("/",router);



app.listen(8083,()=>{
  
console.log('hii server.js')

});

