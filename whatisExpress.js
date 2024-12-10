/*
1.Express ek web framework hai jo tumhe Node.js mein web servers aur APIs banane mein madad karta hai.


2.Imagine karo tumhare paas ek building hai (yeh tumhara web server hai). Ab tumhe har floor pe ek entry (route) deni hai, jaise tumhare paas alag-alag rooms hain jo alag-alag kaam karte hain (URLs). Express.js tumhe yeh help karta hai — ek building (server) banaane mein, aur har ek floor (URL route) pe kaam define karne mein, jaise:
/home pe ek page dikhana
/about pe dusra page dikhana
/users pe users ka data dikhana
Express ko use karke tum routes define kar sakte ho, jisme tum alag-alag HTTP requests (GET, POST, PUT, DELETE) handle kar sakte ho.


3.Express.js ki Features:
Routing:Tum apne application mein alag-alag URLs ko define kar sakte ho, jaise /home, /about, /users, etc.
Yeh URLs different types of actions ko perform karenge (jaise data show karna, form submit karna, etc.).

Middleware Support:Middleware functions tumhare requests ko handle karte hain. Jaise request ko process karna, validate karna, logs create karna, etc.
Yeh ek tarah se filters hain jo requests ko handle karte hain, before they reach the final route handler.
Template Engine Support:Tum dynamic HTML pages generate karne ke liye template engines (jaise Pug, EJS) use kar sakte ho.

API Development:Express ko use karke tum easily REST APIs create kar sakte ho, jo mobile apps aur web apps ke saath communicate karte hain.


4.  npm install express --save



5. Example =>
    // Express ko import karte hain
const express = require('express');

// Express app ko create karte hain
const app = express();

// Home route define karte hain
app.get('/', (req, res) => {
    res.send('Hello, Welcome to Express!'); // Home page par yeh message dikhayega
});

// Server ko listen karate hain
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



6. Middleware=>Imagine karo tumhare paas ek WhatsApp group hai, aur tumhare group mein ek rule hai — "sabko message bhejne se pehle, ek moderator ko approval lena padega."

Ab, jab bhi koi message bheja jaata hai, usse pehle moderator ko check karna padta hai ki message theek hai ya nahi. Agar moderator approve kar deta hai, tab wo message baaki sabko send ho jaata hai.

Middleware bhi kuch aise hi kaam karta hai! Express.js mein jab bhi koi request (jaise ek user ne tumhare server ko request bheja ho) tumhare routes tak pahuchti hai, usse pehle middleware functions se guzarna padta hai. Yeh middleware functions tumhari request ko process karte hain, jaise ki:

Authentication: Tum dekhte ho ki user login hai ya nahi.
Validation: Tum check karte ho ki user ka data sahi hai ya nahi.
Logging: Tum track karte ho ki kaunsi request aaye, kis IP se aaye, etc.
Middleware ka kaam yeh hai ki request ko process karna aur agar sab kuch theek hai, tab us request ko route handler ke paas bhejna.
const express = require('express');
const app = express();

// Middleware - Request logging
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next(); // Next middleware ya route handler ko call karna
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



7. Sending Request=>Ab, agar tumhe apne Express app mein request bhejni ho kisi external server ya kisi route ke liye, toh tum axios ya fetch jese tools ka use kar sakte ho.Yeh tools tumhe external servers se baat karne mein madad karte hain (jaise tum kisi dusre number ko WhatsApp pe message bhej rahe ho).








*/