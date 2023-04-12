const express = require('express');
require("./41-config");
const Product = require("./41-product");

const app = express();
app.use(express.json());

app.get("/search/:key", async(req, res) => {
    console.log(req.params.key);
let data = await Product.find(
    {
        "$or": [
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}}


        ]
    }
);
res.send(data);
})