const connectDB=require("./connect");
connectDB();
const CustModel=require('./models/customer');
const ProductModel=require('./models/product');
async function addProduct(name,price,description,category) {
    try {
        const newProduct=new ProductModel({name,price,description,category});
        const resp=await newProduct.save();//store records in db
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}
//addProduct('Iphone',99999,'easily connect','mobiles')
async function getAllCustomers() {
    try {
        const resp=await CustModel.find();
      //  const resp=await CustModel.find({},{_id:0,date:0})
      console.log(resp);
      
    } catch (error) {
        console.log(error);
        
    }
}
async function getCustomersByEmail(email){
    try {
        const resp=await CustModel.findOne({email});
        console.log(resp);
        
    } catch (error) {
        console.log(error);
        
    }
}
async function getCustomerById(id){
    try {
        const resp=await CustModel.findById(id);
console.log(resp);

    } catch (error) {
        console.log(error);
        
    }
}
async function updateCustomer(id,name,password){
    try {
        const resp=await CustModel.findByIdAndUpdate(id,{name,password})
        if(resp){
            return console.log('Customer updated',resp);    
        }
        return console.log('customer not found to update');
        
    } catch (error) {
        console.log(error);
        
    }
}
async function addCustomer(name,email,username,password) {
    try {
        const newCustomer=new CustModel({name,email,username,password});
        const resp=await newCustomer.save();
        console.log(resp);
        
    } catch (error) {
        console.log(error);
        
    }
}
//addCustomer('alex','alex@gmail.com','alex123','165432');
//getAllCustomers();
//getCustomersByEmail('alex@gmail.com')
updateCustomer('6719b8c4681fcd9312f3660d','alexs','password')