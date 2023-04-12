// In synchronous operations tasks are performed one at a time
// In Asychronous operations, second tasks do not wait to finish first task

let a=20;
let b=0;

setTimeout(()=>{
   b=30;
},2000)


console.log(a+b)