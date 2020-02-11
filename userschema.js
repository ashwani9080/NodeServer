var mongoose = require("mongoose");
var userSchema = mongoose.Schema({

email:{type:String},
psw:{type:String}

},{ versionKey: false })

module.exports = mongoose.model("collectionname",userSchema)