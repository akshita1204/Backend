//Core module
const path=require('path');

const express=require('express');
//Local module 
const rootdir=require('./utils/pathUtils');


const homeroute=require('./routes/homeRoutes');
const contactroute=require('./routes/contactRouter');
const app=express();



app.use(homeroute);
app.use(contactroute);


app.use(express.urlencoded());

app.use((req,res,next)=>
{
    res.sendFile(path.join(rootdir,"views","404.html"));
})


const PORT=3001;
app.listen(PORT,()=>
{
    console.log(`Server running on the ${PORT}`);
})