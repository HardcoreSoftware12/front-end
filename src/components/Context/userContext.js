import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { Router } from 'react-router-dom';

const AuthContext = createContext();

function UserContextProvider(props) {
    const [isLoggedIn, setisLoggedIn] = useState(undefined)

    async function getLoggedIn(){
        const res = await axios.get("http://localhost:8000/user/isLoggedIn")
        const ans = await res.data
        setisLoggedIn(ans);

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