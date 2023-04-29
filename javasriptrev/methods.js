// const arr = [1,2,3,4];
// let res = arr.map((i,index,arr)=>{
//     console.log(i,index,arr);
//     return i+index;
// })
// console.log(res);
// console.log(arr);
// const arr2 = [1,2,3,4];
// let res2 = arr2.filter((i)=>{
//     return i<3
// })
// console.log(res2);
// console.log(arr2);

// const arr = [1,2,3,4];
// let res = arr.reduce((i,j)=>{
//     return i+j
// })
// console.log(res);
const arr = [1,2,3,4];
let e = arr.splice(1,2,34,56)
console.log(arr);
console.log(e);
const newarr = [
    {
      id: 1,
      name: 'foo',
      channel: undefined,
      numbers:233  
    },
    {
      id: 2,
      name: 'koo',
      channel: 'SHERLOK Holmes',
      numbers:833.3  
    },
    {
      id: 3,
      name: 'foo',
      channel: "random",
      numbers:133  
    },
]

newarr.map((i)=>{
    // console.log(i,index);
    console.log(i.name)
})