// sbhi programming language mien kuch feature aready install hote hai
// inko hi core modules bolte hai
// eg console.log("Hello")


// console.log("code any");                //console is a core module
// fs, Buffer, HTTP                     // all are core modules


// global core module vo hote hai jinko import ni karna padta
// non-global core module vo hote hai jinko import karna padta hai

// fs.writeFileSync("hello.txt", "hello world")         // if we run this command, error would occur
//  because we have to import it first.

// const fs = require('fs');
// fs.writeFileSync("hello.txt", "hello world")     //fs create a file, 1st argument is file name and 2nd argument is content
// const fs=require('fs').writeFileSync;            // complete fs import ke place e jo require hai vhi import kro


// console.log(__dirname);              // ye humare directory ka name btata hai
// console.log(__filename);             // ye file name btati hai