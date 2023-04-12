const fs =  require('fs');
const path =  require('path');
const dirPath = path.join(__dirname, "files");          //to get current directory path & 2nd parameter tells file path
// console.log(dirPath);
//  to create multiple file in single directory
// for(i=0;i<=4;i++){
//     fs.writeFileSync(dirPath + `/hello ${i}.txt`,"a simple hello world")
// }

//  to read file directory means to acess the file
fs.readdir(dirPath, (err, files)=>{
// console.log(files);
files.forEach((item)=>{
console.log(item);
})
})