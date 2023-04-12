const dbConnection = require('./26-helper');

const updateData = async() => {
    let data = await dbConnection();
    let result = await data.updateOne(          // for single record update use updateOne, for multiple records update multiple use update only
        {name:"note 5"}, {
            // $set:{name:"mi note 4"}         // for single key update
            $set:{name:"mi note 4", price:350}          // for muliptle key update
        }
        //  1st object is for conditon and second object is for update object
    )
    console.log(result);

}
updateData();