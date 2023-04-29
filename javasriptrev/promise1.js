let p = new Promise((resolve, reject) => {
  let a = [1,2,5,6];
  let search = 2;
    setTimeout(() => 
    {
        let found = false;
       a.forEach((i)=>{
          if(search==i){
            resolve("Success!");
            found = true;

          }
       })
       if(!found){
         reject("Error!");
       }
    }, 3000)
})
let p2 = new Promise((resolve, reject)=>{
    let a = 0;
    if(a==0){
        resolve("another success!");
    } else{
        reject("Error!");
    }
})
p.then((result)=>{
    console.log(result);
    return 2;
}).then((result)=>{
    console.log(result);
}).then(()=>{
    console.log("helo");
}).catch((err)=>{
console.log(err);
})

p2.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})
