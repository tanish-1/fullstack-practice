let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve("Resolved successfully1");
        reject("Failed to resolve")
    }, 2000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Resolved successfully2");
        // reject("Failed to resolve")
    }, 1000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Resolved successfully3");
        // reject("Failed to resolve")
    }, 4000)
})
// .all return in form array if anyone fails , it become the error of all
// let d = Promise.all([p1, p2, p3])
// d.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// .allSetted return  in the form array of object with status and value
// let d = Promise.allSettled([p1, p2, p3])
// d.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// wait for first promise to complete if anyone fails , it become the error of all
// let d = Promise.race([p1, p2, p3])
// d.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// waits for the first promise to fullfill (not rejected) , throw error if all promise are rejected
// let d = Promise.any([p1, p2, p3])
// d.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })
// let d = Promise.reject(new Error("hey "));
// d.then((res) => {
//     console.log(res);
// })
// let d = Promise.resolve(new Error("hey "));
// d.then((res) => {
//     console.log(res);
// })