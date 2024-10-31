function checkpassword(password){
    const minlength=8;
    const upperCase=/[A-Z]/.test(password);
    // console.log(upperCase);
    
    const lowerCase=/[a-z]/.test(password);
    const digit=/\d/.test(password);
    const specialChar=/[!@#$%^&*(),.{}|<>]/.test(password);
    if(password.length<minlength){
        return "Weak Password:Password must be atleast 8 characters long";
    }
    if(!upperCase){
        return "Weak:Password must contain atleast one Uppercase letter";
    }
    if(!lowerCase){
        return "Weak:Password must contain atleast one lowercase letter ";
    }
    if(!digit){
        return "Weak:Password must contain atleast one digit ";
    }
    if(!specialChar){
        return "Weak:Password must contain atleast one special character ";
    }

    return "Strong:Your Password is Strong";
}
console.log(checkpassword("Password123!"));
console.log(checkpassword('password'));
console.log(checkpassword('PASSWORD123'));
console.log(checkpassword('P@ssword'));



