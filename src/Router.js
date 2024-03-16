import {BrowserRouter,Routes,Route} from "react-router-dom"

import React from 'react'
import Front from "./components/Front"
import Register from "./components/Register"
import Login from "./components/Login"
import Navbar from "./components/Layout/Navbar"

function Router() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route  path="/" element={<Front/>}>
            
           

        </Route>
        <Route path="/register" element={<Register/>}>
       
          

        </Route>
        <Route path="/login" element={<Login/>}>
            
           

        </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Router