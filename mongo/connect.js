const mongoose= require('mongoose');

async function connectDB(){
    try {
       await mongoose.connect('mongodb://localhost:27017/example1');
        console.log('Connected')
    } catch (error) {
        console.log('error',error)
    }
    
}

module.exports= connectDB