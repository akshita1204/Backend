const http=require('http')
//"http" module ko apne code mein use karne ke liye import kar rahe hain. Ye module humein ek server banane ka tareeka deta hai.

const server=http.createServer((req,res)=>
/*Is line mein hum ek HTTP server create kar rahe hain. Jab bhi koi request (jaise aapka browser ya koi aur tool server ko request bhejta hai), to server us request ko process karega.

req: Ye hai wo request, jo client ne bheji hai (jaise URL, data, etc.).
res: Ye hai server ka response, jo hum client ko bhejenge. */
{
    console.log(req); /*Jab request aayegi, server us request ko console pe print karega. Matlab, jab aap browser mein localhost:3001 open karenge, to server request ki saari details (URL, headers etc.) ko terminal pe print karega. */
});
server.listen(3001); 
/*Ye line server ko bata rahi hai ki wo ab port 3001 par sunne (listen) lag jaaye. Matlab, server 3001 port pe request lene ke liye ready ho jayega. Agar aap browser mein localhost:3001 likhenge, to ye server ka response dikhayega. */


