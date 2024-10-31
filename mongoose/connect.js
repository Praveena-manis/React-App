const mongoose=require('mongoose');
// function simpleConnect(){
//     mongoose.connect('mongodb://localhost:27017/skill')
//     .then(resp=>console.log('connected'))
//     .catch(error=>console.log(`Error Occurred ${error}`)
//     )
// }

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/skills');
        console.log('Connected');
        
    } catch (error) {
        console.log('error:',error);    
    }
}
module.exports=connectDB