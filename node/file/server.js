const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    fs.readFile('demo.html',(err,data)=>{
        if(err){
            res.writeHead(200,{'content-type':"text/plain"});
            res.write('Data Temp')
            res.end();
        }else{
            res.writeHead(200,{'content-type':"text/html"});
            res.write(data)
            res.end();
        }
    })
})
server.listen(5000,()=>{
    console.log("server started on PORT 5000");
    
})