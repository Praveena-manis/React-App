const connectDB = require("./connect");
const UserModel = require('./user.model.js');

connectDB();

async function updateUser(id,object){
    try {
        const user= await UserModel.findByIdAndUpdate(id,object);
        console.log('User updated',user);
    } catch (error) {
        console.log(error);
    }
}
//updateUser('67180361ba2739648005bf85',{name:"Sonam Soni"})
async function deleteUser(id){
    try {
        await UserModel.findByIdAndDelete(id);
        console.log('User Deleted');
    } catch (error) {
        console.log(error);
    }
}
deleteUser('67180361ba2739648005bf85');
async function getAll(){
    try {
        const data= await UserModel.find();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
async function getByEmail(email){
    try {
        const data= await UserModel.find({email},{name:1,age:1,_id:0});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
//getAll()
//getByEmail('sonam@gmail.com')

async function insertData(name,email,age){
    try {
        const newUser= new UserModel({name,email,age});
        await newUser.save();
        console.log('Data Inserted');
    } catch (error) {
        console.log(error);
    }
}

//insertData('sonam','sonam@gmail.com',30)