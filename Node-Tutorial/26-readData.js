
const dbConnection = require('./26-helper');

// promise used
// dbConnection().then((response)=>{
// response.find().toArray().then((data)=>{
//     console.log(data);
// })
// })

//  by async await
const main = async () => {
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log(data);
}
main()

