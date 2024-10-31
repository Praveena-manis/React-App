const myPromise=new Promise(function(resolve,reject){
    if(78>89){
        resolve('Resolved');
    }
    else{
        reject('Rejected')
    }
})
myPromise
.then(function(resp){
    console.log(resp);
})
.catch(function (err){
    console.log(err);
    
})