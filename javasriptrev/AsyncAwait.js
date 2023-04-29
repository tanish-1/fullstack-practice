const my = async () =>{
    console.log("Hello");
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(23);
            try {
                console.log(we);
            } catch (error) {
                console.log("error is catched");
            }
           
        })
        
    })
}
let a = my();
a.then((value)=>{
    console.log(value);
    return 1;
}).then((value)=>{
console.log(value);
})


