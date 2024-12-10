const http=require('http');
const {reqhandler}=require('./handler');
const server=http.createServer(reqhandler);
const PORT=3003;
server.listen(PORT,()=>
{
    console.log(`Server running on the ${PORT}`);
})