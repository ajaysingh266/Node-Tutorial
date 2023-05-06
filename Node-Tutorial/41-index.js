const express = require('express');
require("./41-config");
const Product = require("./41-product");

const app = express();
app.use(express.json());            // body ko parse karna padta hai, means string to  json ke ander convert karna padta hai
app.post("/create", async(req, res)=>{
    //     console.log(req.body);
    // res.sendFile("Done")
    let data = new Product(req.body);
    let result = await data.save();
    res.send(result);
})

app.listen(5000)
