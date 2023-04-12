// var x=20;

// if(x==20){
//     console.log('yes');
// } else{
//     console.log("no");
// }

// for(i=0; i<x; i++){
//     console.log(i);
// }
// const arr = [2,4,7,1,3,8,3];
// console.log(arr);



const app=require('./app')
let arr=[4,1,6,3,4,89,0];
console.log(app.xyz())
const result =arr.filter((item)=>{
    return item>=4
});
console.warn(result);
console.log(app.x);