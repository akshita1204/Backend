const reqhandler=(req,res)=>
{
 console.log(req.url,req.method);
 if(req.url==='/')
 {
    res.setHeader('Content-Type','text/html');
    res.write(`<html>
   <head><title>Calculator</title></head>
  <body>
  <h1>Welcome</h1>
  <a href="/calculator">Go to calculator</a>
  </body>`);
  return res.end();
 }
 res.setHeader('Content-Type','text/html');
    res.write(`<html>
   <head><title>Calculator</title></head>
  <body>
  <h1>404 page doesnt found</h1>
  <a href="/">Go to Home</a>
  </body>`);
}
exports.reqhandler=reqhandler; 