let a=1;
let b=2;
  
setTimeout(function (params) {
    console.log('Timeout:' + a )
},)

a = 10;
fetch('/').then(function (params) {
    console.log("ftech");
})
console.log("Synchronous");

console.log(a);
console.log(b);


async function sairam(params) {
    let delhiClimate= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 1000);
    })

    let bangaloreClimate= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 2000);
    })

    delhiClimate.then(alert);
    bangaloreClimate.then(alert);
}

console.log("Welcome to climate info")
sairam();