const sumreqhandler=(req,res)=>
{
console.log("In sum req handler");
console.log(req.url);

const body=[];
//hmare paas data chunks ki form me aarha hai
req.on('data',chunk=>body.push(chunk));
//jb end ho jaaye to data ko concat karenge 
req.on('end',()=>
{
const bodystr=Buffer.concat(body).toString();
//Iska kaam hai, jo string aayi hai usse key-value pairs (parameters) mein convert karna
const params=new URLSearchParams(bodystr);
// yeh usse ek normal object mein convert kar deta hai jisme key-value pairs hoti hain.
const bodyobj=Object.fromEntries(params);
const sumres=Number(bodyobj.first) + Number(bodyobj.second);
console.log(sumres);

res.setHeader('Content-Type','text/html');
    res.write(`<html>
   <head><title>Calculator</title></head>
  <body>
  <h1>Your Sum is ${sumres}</h1>
     
  </body>`);
  return res.end();
});

}
exports.sumreqhandler=sumreqhandler;