const express = require('express');
const  mongoose  = require('mongoose');
const router = express.Router();
const connectDB = require("./db");
const path = require("path");

connectDB()
let details = new mongoose.Schema({
    dname: String
});
let mod = mongoose.model('mod',details);
let dat = new mod({dname:"hardik"});

router.get('/Contact', (req, res)=>{
    res.render('home');
});
router.get('/', (req, res)=>{
    res.render('home');
});

router.get('/data', (req, res)=>{
mod.find({dname:"hardik"},function(err,dat){
    if(err) return console.log(err);
    console.log("Success "+dat);
});
res.json({"Success":true})
});
router.get('/About', (req, res)=>{
    res.render('home');
});
router.get('/Team', (req, res)=>{
    res.render('home');
});
router.get('/Our-Vision', (req, res)=>{
    res.render('OurVision');
});

module.exports = router;