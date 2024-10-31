const http=require('http');
http.createServer((req,res)=>{
    let response='';
    if(req.url=='/about'){
        response="About us"
    }
    else if(req.url=='/contact'){
        response="Contact Us page"
    }else if(req.url=='/news'){
        response="News Page"
    }else{
        response="Home Page"
    }
    res.end(response)
}).listen(5000,()=>{
    console.log("Server Started");
    
})