// node js ko mongoDB se connect karne ke liye npm pakage hai
// official mongodb driver but usme kuch limitations hai, vo complete karta hai mongoose
// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

// const mongoose = require("mongoose");
// const main = async () => {
//   await mongoose.connect(
//     "mongodb+srv://ajaysingh266:<password>@e-comm-cluster.0scqbyf.mongodb.net/e-comm-web"
//   );
  // schema humare DB ke fields ko validate karte hai
//   const ProductSchema = new mongoose.Schema({
//     name: String,
//   });
  
  // model node js ko mongodb se connect karta hai, yha pe structure hota hai poora ka poora
  // DB ke ander fields ko define karna unko schema bolte hai, taaki validation apply ho paye
  // model in schema ko use karke mondoDB and nodeJS ko connect karta hai

//   const ProductsModel = mongoose.model("products", ProductSchema);
//   let data = new ProductsModel({ name: "m8" });
//   let result = await data.save();
//   console.log(result);
// module.exports=mongoose.model("products", ProductSchema);
// };

// main();


const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name:String
})
module.exports = mongoose.model("products", ProductSchema)

// remaing code in 38 and index file