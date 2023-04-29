const loadsrcipt =(src) =>{
    return new Promise((resolve, reject)=>{
        let srcipt = document.createElement('script');
        srcipt.type = 'text/javascript';
        srcipt.src = src;
        document.body.appendChild(srcipt);
        srcipt.onload = () =>{
          resolve("Successfully loaded");
        }
        srcipt.onerror = () =>{
            reject("Error loading");
        }
    })
}



let result = loadsrcipt("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js");
result.then((value)=>{
    console.log(value);
}).then(()=>{
    console.log("Another Srcipt loading");
}).then(()=>{
   return loadsrcipt("abc://ab.min.js")
}).then((value)=>{
  console.log("Done Thanx " + value);
}).catch((err)=>{
    console.log(err);
})