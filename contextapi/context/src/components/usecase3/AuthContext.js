import { createContext, useContext, useState } from "react";
 const AuthContext=createContext();
 export const AuthProvider=({Children})=>{
    const [user,setUser]=useState(null);

    const login=(userData)=>{
        console.log(userData);
        setUser(userData);
    }
    const logout=()=>{
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {Children}
        </AuthContext.Provider>
    )
 }
 export const useAuthContext=()=>{
    return useContext(AuthContext);
 }