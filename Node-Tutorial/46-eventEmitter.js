// events means kuch signal dena
// emitter means kuch generate karna
// html , js ke ander button ek tarah ka emitter hi hai

const express = require('express');
const EventEmitter = require('events');             // ye ek basically class hai, isliye iska first letter capital hai  
const app = express();
const event = new EventEmitter();

let count = 0;
event.on("countAPI",()=>{
    count++;
    console.log("event called", count);

})

app.get('/', (req, res) => {
    res.send("api called")
    event.emit("countAPI")
});
app.get('/search', (req, res) => {
    res.send("search api called")
});
app.get('/update', (req, res) => {
    res.send("update api called")
})
app.listen(5000)