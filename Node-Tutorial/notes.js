// What is Node js?
// Node is not a language.
// This is a server environment.
// Node js can connect with the database.
// Code and syntax are very similar to JavaScript.
// But not exactly the same.
// Node is free and open-source.
// Node js use chrome’s engine V8 to execute code.

// Why do we use Node?
// Node js mostly used for API
// So we can connect the same database with a Web App, or Mobile App.
// Node is easy to understand who knows JS?
// Node is superfast for APIs
// With node and JS, you can become a full-stack developer.

// History and More
// First release May 27, 2009
// Written in c, c++, JS

// JavaScript and Node are the same?
// JS and Node code syntax is the same
// If you know JS, you can easily understand Node.
// But both are not exactly the same.
// You cannot connect JS to DB.
// Node JS can connect with DB.
// Node JS runs on the server side.
// JS is run on the browser.


// node js is single threaded

//  Q is node js server side scripting lanuage hai ya client side
// ans  node js language ni hai, ye ek run time environment hai JS ka, ye JS ko allow karta hai server side execution ke liye

// What developers make with NodeJS?
// Developers make API with NodeJS
// so we can connect server with client 
// node can make API for web, android and ios etc
// u can also make website

// what is package.json?
//  to crate package.json write on terminal --> npm init
//  ye humare project ki details rakhte hai, coding se related details.
//  like, project name, project version, git repository, kaunsi kaunsi command use ho rhe hai. konse konse package daal rakhe

// npm init
//  package name:(name)
//  version:(1.0.0)
// description:(a node js tutorial)
// entry point: (index.js)
// test command:
// git repository:(https://github.com/ajaysingh266/JWT) 
// keywords: lets start coding
// author: Ajay
// license:(ISC)
//  Is it ok?(yes)

// package.json humare project ke details rakhta hai, but package-lock.json package.json ki details rakhta hai



// if node_modules deleted from project then start npm i to reinstall the node_modules
// never push node modules on git. use gitinore


// nodemon is used for continuous live output
//  it always install global
//  run in terminal -> nodemon filename

// Nodejs is async
// 1. Run first script
// 2. Run second script(complex data)
//      ---- it will not wait to finish 2nd script--
//  3. Run third script
//  4. continue...

// http humare api banane mien help kart hai, req n response deta hai
// http.createServer                // serever create karta hai
// .listen means port pe