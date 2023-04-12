// const {MongoClient} = require("mongodb");
// const MongoClient = require("mongodb").MongoClient;         
//both syntex for importing are same. 1st is mordern JS Syntex


// const url = "mongodb://localhost:27017";
// const database = "ecomm";
// const client = new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection("products");
//     let response  = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();

const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='e-comm'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();    
    db= result.db(databaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();