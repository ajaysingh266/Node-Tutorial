const express = require('express');
const reqFilter = require('./24-helpermiddleware')
const app = express();
const route = express.Router();

// app.use(reqFilter)
// app.get("/", (req, resp) => {
//     resp.send("hello world")
// })
//  for 1 or 2 route
// app.get("/users", reqFilter, (req, resp) => {
//     resp.send("hello user")
// })
// app.get("/about",reqFilter, (req, resp) => {
//     resp.send("about page")
// })

// for multiple routes
route.use(reqFilter);
app.get("/", (req, resp) => {
    resp.send("hello world")
})

app.get("/users",  (req, resp) => {
    resp.send("hello user")
})
route.get("/about", (req, resp) => {
    resp.send("about page")
})
route.get("/contact", (req, resp) => {
    resp.send("contact page")
})

app.use("/", route)

app.listen(5000);






// app.use(reqFilter)
// app.get("/", (req, resp) => {
//     resp.send("hello world")
// })

// app.get("/users",  (req, resp) => {
//     resp.send("hello user")
// })
