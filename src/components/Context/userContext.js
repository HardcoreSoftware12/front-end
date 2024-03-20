import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { Router } from 'react-router-dom';

const AuthContext = createContext();

function UserContextProvider(props) {
    const [isLoggedIn, setisLoggedIn] = useState(undefined)

    async function getLoggedIn(){
        const res = await axios.get("https://noteapi-bpu4.onrender.com/user/isLoggedIn")
        console.log(res.data);
        setisLoggedIn(res.data);

    }

    useEffect(()=>{
        getLoggedIn();

    },[])

    return(
        <AuthContext.Provider value={{isLoggedIn,getLoggedIn}}>
           {props.children} {/*//Router */}
        </AuthContext.Provider>
    )
}
export default AuthContext
export  {UserContextProvider}