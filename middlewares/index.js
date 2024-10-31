const express=require('express');
const cors=require('cors');
const auth=require('./middlewares/auth');
const test=require('./middlewares/test');
const app=express();
//third party middleware
app.use(cors());
//allowing frontend to access backend
let users=[];
app.use(express.json());//inbuilt middleware
app.use(auth);//excuted before all apis
app.post('/users',(req,res)=>{
    users.push(req.body);
    res.send('user created');
})
//test middleware executed before get req only
app.get('/users',test,(req,res)=>{
    res.status(200).send(users);
})
app.delete('/users/:email',(req,res)=>{
    const email=req.params.email;
    if(users.find(item=>item.email==email)){
        users=users.filter(item=>item.email!==email)
        res.send('user deleted')
    }else{
        res.status(404).send('user not found');
    }
})
app.put('/users/:email',(req,res)=>{
    const email=req.params.email;
    const userIndex=users.findIndex(item=>item.email==email);
    if(userIndex>=0){
        users[userIndex]=req.body;
        res.send('user updated');
    }else{
        res.status(404).send('user not found');
    }
})
app.listen(5000,()=>{
    console.log("server started");
    
})