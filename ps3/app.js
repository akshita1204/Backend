const express=require('express');
const app=express();

app.use((req,res,next)=>
{
    console.log("First Dummy Middleware");
    next();  //call ho raha hai, jo ye batata hai ki control agle middleware ko dena hai.
});
app.use((req,res,next)=>
    {
        console.log("Second Dummy Middleware");
        next();
    });
// app.use("/",(req,res,next)=>
//         {
//             console.log("Third Dummy Middleware");
//             res.send("<h1>Welcome</h1>");
//         });
app.get("/",(req,res,next)=>
    {
        console.log("Handling / for GET", req.url,req.method);
        res.send(`<h1>Welocome</h1>`);
    });

app.get("/contactus",(req,res,next)=>
        {
            console.log("Handling / for GET", req.url,req.method);
            res.send(`<h1>Please Enter your details here!</h1>
    <form action="/contactus" method="POST">
        <input type="text" placeholder="Enter your name">
        <input type="email" placeholder="Enter your email">
        <input type="submit">
    </form>`);
        });
app.post("/contactus",(req,res,next)=>
{
    console.log("Handling /get for post",req.url,req.method);
    res.send(`<h1>Thanks!</h1>`)
})


const PORT=3001;
app.listen(PORT,()=>
{
    console.log(`Server running on the ${PORT}`);
})