// middlewares are functions that only use with routes only
// inke help se hum request and response ko handle kar sakte hai or modify bhi kar sakte hai
// for eg authentication check karne ke liye, kisi country mien apne website block karne ke liye

// types of middleware
// * Appliation level,  * router-level, *error handling, *built-in, *third-party middleware

const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    // middleware has 3 filters, all are mandatory
    // req kya aaye
    // response kya de re hai
    // next ek function hota hai, jo bi aap route call krenge to uspe next call kanra hoga, ni to ye route ko
    // proceed ni krega
    // console.log('reqFilter');
    if (!req.query.age) {
        resp.send("age is required")
    }else if(req.query.age<18){
        resp.send("user is student")
    }
    else{
        next();
    }

   
}
app.use(reqFilter)
app.get("/", (req, resp) => {
    resp.send("hello world")
})

app.get("/users", (req, resp) => {
    resp.send("hello user")
})


app.listen(5000);