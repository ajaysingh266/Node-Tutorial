const express = require("express");
const dbConnection = require("./26-helper");
const app = express();

app.use(express.json());

// app.get('/', async (req, res) => {
//     let data = await dbConnection();
//     data = await data.find().toArray();
//     console.log(data);
// res.send({ name: "ajay" })
//     res.send(data)

// });

// app.post("/", async(req, resp)=>{
// console.log(req.body);

//     let data = await dbConnection();
//     let result = await data.insert(req.body);
//     resp.send(result);
// })

app.put("/", async (req, resp) => {
  // console.log(req.body);

  let data = await dbConnection();
  let result = await data.updateOne(
    // {name:"Iphone 13"},
    // {$set:{price:900}}       static way
    { name: req.body.name }, // dynamic name
    { $set: req.body } // dynamic way
  );
  resp.send({ result: "update" });
});

app.listen(5000);
