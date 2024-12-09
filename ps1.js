const http=require('http')
const server=http.createServer((req,res)=>
{
console.log(req.url,req.method);
//routing
if(req.url==='/home')
{
    res.write('<h1>Welcome to My Page</h1>')
    return res.end();
}
else if(req.url==='/men')
{
    res.write('<h1>Welcome to Men Page</h1>')
    return res.end();
}
else if(req.url==='/women')
    {
        res.write('<h1>Welcome to Women Page</h1>')
        return res.end();
    }
else if(req.url==='/kids')
        {
            res.write('<h1>Welcome to Kids Page</h1>')
            return res.end();
        }
else if(req.url==='/cart')
        {
            res.write('<h1>Welcome to your Cart</h1>')
            return res.end();
        }

///////
res.write(`
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navigation Bar</title>
</head>
<body>
    <nav>
        <u>
            <li><a href='/home'>Home</a></li>
            <li><a href='/men'>Men</a></li>
            <li><a href='/women'>Women</a></li>
            <li><a href='/kids'>Kids</a></li>
            <li><a href='/cart'>Cart</a></li>
        </u>
    </nav>
</body>
</html> 
    `);
    res.end();
});
server.listen(3001,()=>
{
 console.log('Server is running');
});