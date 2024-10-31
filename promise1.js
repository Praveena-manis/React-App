// let myPromise=new Promise(function(resolve,reject){
//     count=1;
//     setTimeout(function(){
//         if(count>10){
//             resolve('Timer Completed:'+count)
//         }else{
//             reject(`Rejected:${count}`)
//         }
//     },2000)
//     for(let i=0;i<=10;i++){
//         count++;
//     }

// })
// myPromise .then(function(resp){
//     console.log(resp);    
// })
// .catch(function(err){
//     console.log(err);
    
// })/

async function fetchData(){
    try {
        const resp=await fetch('https://jsonplaceholder.typicode.com/users/1')
        const json=await resp.json();
        console.log(json);
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchData();