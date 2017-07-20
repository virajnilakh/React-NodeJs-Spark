var mongoose=require('mongoose');

var fcSchema=mongoose.Schema({
    name:String,
    function:String,
    argument:String
});

var myFunction=mongoose.model("Function",fcSchema);
module.exports=myFunction;