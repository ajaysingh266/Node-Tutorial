const express = require("express");
const dbConnection = require("./26-helper");
const app = express();

app.get("/", async (req, res) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.log(data);
  // res.send({ name: "ajay" })
  res.send(data);
});

app.listen(5000);
