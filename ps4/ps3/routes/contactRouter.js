//Core module
const path=require('path');
//External Router
const express=require('express');
//Local module 
const rootdir=require('../utils/pathUtils');

const contactroute=express.Router();

contactroute.get("/contactus",(req,res,next)=>
    {
        console.log("Handling / for GET", req.url,req.method);
        res.sendFile(path.join(rootdir,"views","contact.html"));
    });

contactroute.post("/contactus",(req,res,next)=>
        {
            console.log("Handling /get for post",req.url,req.method);
            res.sendFile(path.join(rootdir,"views","success.html"));
        })

module.exports=contactroute;