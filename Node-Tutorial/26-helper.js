const { MongoClient } = require('mongodb')
const url = 'mongodb+srv://ajaysingh266:ajaysingh266@cluster0.aydewq6.mongodb.net/test';

const databaseName = 'e-comm'
const client = new MongoClient(url);

async function dbConnection() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('products');
  
}

module.exports = dbConnection;
