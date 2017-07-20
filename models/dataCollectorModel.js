var mongoose=require('mongoose');
var dcSchema=mongoose.Schema({
    name:String,
    url:String,
    frequency:String,
    lastRunAt:Date
});
dcSchema.pre('save',function (next) {
    this.lastRunAt=new Date();
    next();
})
var dataCollector=mongoose.model('DataCollector',dcSchema);
module.exports=dataCollector;