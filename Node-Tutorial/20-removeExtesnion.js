const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, "files");
// console.log(filePath);
// app.use(express.static(filePath));
app.get("", (_, res)=>{
    res.sendFile(`${filePath}/index.html`);
})
app.get("/about", (_, res)=>{
    res.sendFile(`${filePath}/about.html`);
})
app.get("*", (_, res)=>{
    res.sendFile(`${filePath}/404.html`);
})
app.listen(4200)