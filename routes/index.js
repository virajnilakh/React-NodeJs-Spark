var express = require('express');
var router = express.Router();
var dataCollector=require('../models/dataCollectorModel');
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
router.get('/addFunctionPage', function(req, res, next) {
    res.render('addFunctionPage');
});

module.exports = router;
