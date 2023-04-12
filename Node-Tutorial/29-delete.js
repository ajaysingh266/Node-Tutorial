const dbConnection = require('./26-helper');

const deleteData = async() => {
 let data = await dbConnection();
//  let result = await data.deleteOne({name:"i 15"});          // for single entry delete use deleteOne
//  let result = await data.delete({name:"i 15"});          // for single entry delete use delete only
let result = await data.deleteMany({name:'max 7'})          // for multiple entry delete use deleteMany only

 console.log(result);
}

deleteData();
