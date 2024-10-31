// function checkAge(age){
//     if(age<18){
//         throw new Error('Not a Valid Age')
//     }
//     console.log("Valid User can vote");  
// }
// try{
//     checkAge(12);
//     checkAge(86);
// }catch(error){
//     console.log("Error Occurred while checking Age");
//     console.log(error.message)
// }finally{
//     console.log("program completed");
    
// }
const data="Hello All";
try {
    const obj=JSON.parse(data);
    console.log(obj);
    
} catch (error) {
    console.log(error.message);
    
}