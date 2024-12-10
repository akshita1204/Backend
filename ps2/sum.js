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

/*AGAR SET HEADER KO BAHAR RAKHENGE TO
*tumhe 2 numbers add karne hain jo tumhare dost ne bheje hain. Tum woh numbers ek-ek chunk mein receive kar rahe ho (like WhatsApp messages). Tum ekdum reply nahi bhej sakte jab tak tumhe dono numbers complete na mil jaye. end event ka kaam hai yeh check karna ki poora message (data) aa gaya hai. */
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

/*
Node.js mein, tum jo request handle karte ho, wo event-driven hoti hai. Matlab, tumhare paas different events hote hain jaise data, end, error, etc., aur yeh events asynchronous (non-blocking) hote hain. Jab tum request handle kar rahe ho, toh tumhe wait karna padta hai jab tak data puri tarah se aa na jaye, uske baad hi tum response bhej sakte ho.

data event ka matlab hai: "Data aa raha hai, ab usse process karo".
end event ka matlab hai: "Data ka stream pura ho gaya, ab response send karo



*/