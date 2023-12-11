import { createContext, useState } from 'react';

export const MyContext=createContext();


export const MyProvider =({children}) =>{
    const [email,setemail]=useState('');
    const [password,setpassword] =useState('');
    const [id_user,setid_user]=useState(0)
    return(
        <MyContext.Provider value={{email,setemail,password,setpassword,id_user,setid_user}}>
        {children}
        </MyContext.Provider>
    )
}