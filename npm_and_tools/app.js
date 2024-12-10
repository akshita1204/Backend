const http=require('http');
const server=http.createServer((req,res)=>
{
    console.log(req);
})
const PORT=3003;
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


*/