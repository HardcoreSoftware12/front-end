import {BrowserRouter,Routes,Route} from "react-router-dom"

import React, { useContext } from 'react'
import Front from "./components/Front"
import Register from "./Auth/Register"
import Login from "./Auth/Login"
import Navbar from "./components/Layout/Navbar"
import AuthContext from "./components/Context/userContext"
import Logout from "./Auth/Logout"
import CreatePost from "./components/User/CreatePost"
import HomePage from "./components/User/HomePage"
// import MyPosts from "./components/User/MyPosts"
import Footer from "./components/Layout/Footer"
import UserPosts from "./components/User/UserPosts"
import UpdatePost from "./components/User/UpdatePost"
import PostDetails from "./components/User/PostDetails"

// import UpdatePost from "./components/User/UpdatePost"

function Router() {
    const {isLoggedIn} = useContext(AuthContext);
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route  path="/" element={<Front/>}/> */}
        {
            isLoggedIn === false && <>
              <Route  path="/" element={<Front/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
            </>
        }
        {
            isLoggedIn === true && <>
             <Route path="/" element={<HomePage/>}/>
             <Route path="/mypost" element={<UserPosts/>}/>
              <Route path="/createpost" element={<CreatePost/>}/>
             
              {/* <Route path="/viewpost" element={<CreatePost/>}/> */}
              <Route path="/update/:id" element={<UpdatePost/>}/>
              <Route path="/deletepost/:id" />
              <Route path="/postdetails/:id" element={<PostDetails/>} />

              <Route path="/logout"  />
            
            </>
        }
        
    </Routes>

    
    
    
    </BrowserRouter>
    </>
  )
}

export default Router