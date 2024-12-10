const {sumreqhandler}=require('./sum');

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

 else if(req.url.toLowerCase()==='/calculator')
 {
    res.setHeader('Content-Type','text/html');
    res.write(`<html>
   <head><title>Calculator</title></head>
  <body>
  <h1>Calculator</h1>
     <form action="/calculateres" method="post">
        <input type="text" placeholder="First Num" name="first"/>
        <input type="text" placeholder="Second Num" name="second"/>
        <input type="submit" value="sum">
    </form>
  </body>`);
  return res.end();
 }

 else if(req.url.toLowerCase()==='/calculateres' && req.method==='POST')
 {
    return sumreqhandler(req,res);
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