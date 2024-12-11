//Core module
const path=require('path');
//External Router
const express=require('express');
//Local module 
const rootdir=require('../utils/pathUtils');

const homeroute=express.Router();
homeroute.get("/",(req,res,next)=>
    {
        console.log("Handling / for GET", req.url,req.method);
        res.sendFile(path.join(rootdir,"views","home.html"));
    });
module.exports=homeroute;