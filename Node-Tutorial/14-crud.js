const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is a simple file');      //crate new file
// fs.readFile(filePath,'utf8',(err,item)=>{                    //utf8 removes the buffer
// buffer means temprary memory location, node js ko thodi se memory chahiye hoti hai
// console.log(item);
// })
// fs.appendFile(filePath,' for fruits',(err)=>{
// if(!err) console.log("file is updated")
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);

// buffer means temporary memory location