const express = require('express');
require("./41-config");
const Product = require("./41-product");

const app = express();
app.use(express.json());
app.post("/create", async(req, res)=>{
    //     console.log(req.body);
    // res.sendFile("Done")
    let data = new Product(req.body);
    let result = await data.save();
    res.send(result);
})

app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})
app.listen(5000)