const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('ContentType','text/plain');
    res.end('Hello World');
});
server.listen(3000,()=>{
    console.log('Server is Running at http://localhost:3000/');
    
});