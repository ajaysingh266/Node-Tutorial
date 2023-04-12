const http = require("http"); 
const data = require("./07-helperdata");
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application\json'});
    // res,write({name:"Ajay", email:"jay@ajay.com"})
    // res,write(JSON.stringify({name:"Ajay", email:"jay@ajay.com"}));
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);