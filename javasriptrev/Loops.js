// let a = 23;
// console.log(a);
// let b = [12,3,4,56,6];
// let n = b.length;
// // classic for-loop
// for(let i = 0 ; i<n ; i++){
//     console.log(b[i]);
// }
// // for-of loop
// console.log("For--Of loop");
// for(let i of b){
//     console.log(i);
// }
// // for--Each loop
// console.log("For--Each loop");
// b.forEach((i)=>{
//   console.log(i);
// })
// let str = ["xyz", "xyz", "xyz", "xyz"];
// console.log(str.indexOf("xyz"));
// let n2 = str.length;
// console.log(n2);
// console.log(str[0]);
// str.forEach((i)=>{
//     console.log(i);
// })
let arr = [12,3,4,5];
let arr2 = [12,3,4,5];
let b = arr.toString();
let d = arr.join("_");
console.log(d);
arr.pop();
console.log(arr);
arr.push(45);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(6);
console.log(arr);
let newar = arr.concat(arr2);
console.log(newar);
arr.sort();
console.log(arr);
arr.splice(1,2,21,56)
console.log(arr);
let newre = arr.slice(3);


let obj = {
    abc: 1,
    "yoo": true,
    channel:undefined,
   random: function(){
    console.log(obj.yoo);
   }
}
obj.random()
console.log(obj);
console.log(obj.abc)
console.log(obj["yoo"])
for(let key in obj){
    console.log(`${key} in ${obj[key]}`)
}