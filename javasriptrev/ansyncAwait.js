const func = async () =>{
    let p = new Promise((resolve, reject) =>{
         setTimeout(()=>{
          resolve("success")
        }, 1000)
    })

    let p1 = new Promise((resolve, reject) =>{
         setTimeout(()=>{
          reject("error")
        }, 2000)
    })

    let p2 = new Promise((resolve, reject) =>{
         setTimeout(()=>{
          resolve("success")
        }, 3000)
    })

    console.log("loading...");

    let result = await p;
    try{
        let result2 = await p1;
        console.log(result2);
    } catch(e){
        console.log(e)
    }
    let result3 = await p2;
    
    return [result,result3];
}
let a = func();
a.then((value) =>{
    console.log(value)
  })
  .catch((err) =>{
    console.log(err)
  });

// const xyz = async () =>{
//     console.log("bye");
// }
// const main = async () =>{
//     let a = await func()
//     let b = await xyz()
//       a.then((value) =>{
//         console.log(value)
//       })
//       .catch((err) =>{
//         console.log(err)
//       });
// }
// main().then((value) =>{
//     console.log(value)
// })
// .catch((err) =>{
//     console.log(err)
// })
