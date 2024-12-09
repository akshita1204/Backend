const http=require('http')
const server=http.createServer((req,res)=>
{
 console.log(req.url, req.method,req.headers); //req
 if(req.url==='/')
 {
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My first page</head></title>');
    res.write('<body><h1>Like and do share</h1></body>')
    res.write('</html>')
    res.end()
 }
 else if(req.url==='/about')
 {
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Welocome!</head></title>');
    res.write('<body><h1>Like /h1></body>')
    res.write('</html>')
    res.end()
 }

 //sending req above

});
const PORT=3003;
server.listen(PORT,()=>
{
    console.log(`Server is running on the port${PORT}`);
})