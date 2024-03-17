import {BrowserRouter,Routes,Route} from "react-router-dom"

import React, { useContext } from 'react'
import Front from "./components/Front"
import Register from "./Auth/Register"
import Login from "./Auth/Login"
import Navbar from "./components/Layout/Navbar"
import AuthContext from "./components/Context/userContext"
import Logout from "./Auth/Logout"
import CreatePost from "./components/CreatePost"
import HomePage from "./components/User/HomePage"

function Router() {
    const {isLoggedIn} = useContext(AuthContext);
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Front/>}/>
        {
            isLoggedIn === false && <>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
            </>
        }
        {
            isLoggedIn === true && <>
              <Route path="/createPost" element={<CreatePost/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/viewpost" element={<CreatePost/>}/>
              <Route path="/updatepost" element={<CreatePost/>}/>
              <Route path="/deletepost" element={<CreatePost/>}/>
              <Route path="/logout"  />
            
            </>
        }
        
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Router