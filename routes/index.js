var express = require('express');
var router = express.Router();
var dataCollector=require('../models/dataCollectorModel');
var myFunction=require('../models/functionModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/addApiPage', function(req, res, next) {
    res.render('addApiPage',{message:""});
});
router.post('/addApiPage', function(req, res, next) {
    var message=req.body.name;
    var dataColletorDetails={
        name:req.body.name,
        url:req.body.url,
        frequency:req.body.frequency
    };
    var dc=new dataCollector(dataColletorDetails);
    dc.save(function (err) {
        if(err) console.log("Error at router.post('/addApiPage' dc.save ");
        else console.log("Api saved!!");
    })
    res.render('addApiPage',{message:message});
});
router.post('/addFunctionPage', function(req, res, next) {
    var message=req.body.name;
    var functionDetails={
        name:req.body.name,
        function:req.body.function,
        argument:'msg'
    };
    var fc=new myFunction(functionDetails);
    fc.save(function (err) {
        if(err) console.log("Error at router.post('/addFunctionPage' fc.save ");
        else console.log("Function saved!!");
    })
    res.render('addFunctionPage',{message:message});
});
router.get('/addFunctionPage', function(req, res, next) {

    res.render('addFunctionPage',{message:""});
});

module.exports = router;
