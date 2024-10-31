const fs=require('fs');
function writeDataToFile(fileName,data){
    fs.writeFile(fileName,data,(err)=>{
        if(err){
            console.log(err);   
        }else{
            console.log('Data Written Successfully');
        }
    })
}
writeDataToFile('data.txt','Welcome to node js file system');
function appendDataToFile(fileName,data){
    fs.appendFile(fileName,data,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Data Appended Successfully");
            
        }
    })
}
// appendDataToFile('hello.txt','welcome')