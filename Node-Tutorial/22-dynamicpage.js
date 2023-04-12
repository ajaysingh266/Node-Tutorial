const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, "files");

// helper file in view folder

app.set('view engine', 'ejs');
app.get("", (_, res)=>{
    res.sendFile(`${filePath}/index.html`);
})
app.get("/loop", (_, res)=>{
    const user = {
        name: "John Doe",
        age: 30,
        skills:["html","css","javascript"]
    }
  res.render("loop", {user})                     // sending variable as second argument
})
app.get("/login",(_,res)=>{
    res.render("login")
})
app.listen(4200)