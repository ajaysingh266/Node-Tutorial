const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, "files");


// helper file in view folder
app.set('view engine', 'ejs');
app.get("", (_, res)=>{
    res.sendFile(`${filePath}/index.html`);
})
app.get("/profile", (_, res)=>{
    const user = {
        name: "John Doe",
        age: 30
    }
  res.render("profile", {user})                     // sending variable as second argument
})
app.get("/about", (_, res)=>{
    res.sendFile(`${filePath}/about.html`);
})
app.get("*", (_, res)=>{
    res.sendFile(`${filePath}/404.html`);
})
app.listen(4200)