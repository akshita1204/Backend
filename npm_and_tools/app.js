const http=require('http');
const server=http.createServer((req,res)=>
{
    console.log(req);
})
const PORT=3004;
server.listen(PORT,()=>
{
    console.log(`Server running on the ${PORT}`);
})
/*
STEP I DID
1. npm init
2. package name: 
3. Enter
4. Give description as if u want
5. enter...........
6.add a script as start in scripts
7.npm start
8.npm install nodemon --save-dev
9. npm install -g nodemon   for gloabl installation
10. nodemon app.js

*/

/*
node js basically ek platform hai jisme agar javascript hume chrome se bahar chalana hai to uske liye. 
to make it easier we use Express.js

*/