const dbConnection = require('./26-helper');

const insert = async () => {
    const db = await dbConnection();
    const result = await db.insert(
        // { name: "note 5", brand: "vivo", price: 350, category: "mobile" }           // for single entry
        [
            { name: "note 5", brand: "vivo", price: 350, category: "mobile" },
            { name: "5", brand: "oppo", price: 250, category: "mobile" },
            { name: "note ", brand: "mi", price: 150, category: "mobile" }
        ]               // for muliple entry make a array of object
    );
    // console.log(result.acknowledge);
    if(result.acknowledge){
        console.log("Success");
    }
}
insert();