const http = require('http');               // http module request and response handle karta hai

// http.createServer((req, res) => {
// request kya krega, for eg front end se koi form submit hua hai, to unke access karne ke liye
//  response node js se repsonse send karne ke liye
    // res.write("hello this is ajay");
    // res.write("<h1>hello this is ajay</h1>");
    // res.end();
// }).listen(4500);                    // listen used for browser

function dataControl(req, res) {
   
    res.write("<h1>hello This is ajay</h1>");
    res.end();
}
http.createServer(dataControl).listen(4500);


// arrow functions benefit
// function test(a){
// return a*10
// }
// const test=(a)=>a*100;