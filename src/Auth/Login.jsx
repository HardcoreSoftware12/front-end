import React, { useContext, useState } from 'react'
import axios from 'axios';
import Cookies from "js-cookie"
import AuthContext from '../components/Context/userContext';

import { useNavigate,redirect } from "react-router-dom";

const Login = () => {
 
  const {getLoggedIn} = useContext(AuthContext)
  const history = useNavigate()
  const[msg,setMsg] = useState()

    const [formData, setFormData] = useState({
        
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit=async(e)=>{
      e.preventDefault();
      
      const res = await axios.post("http://localhost:8000/user/login",formData);
      
     setMsg(res.data.msg)
      
      await getLoggedIn();
      if(res.data.msg == "user loggedIn"){
        history("/");
      }
      
      // return redirect("/getAllPost");

      
     

     
    }

  

    



  return (
    <div className="mt-10 w-[60%] mx-auto desktop:w-[40%]">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center space-y-2">
     
      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Login
      </h2>
      <span className={`text-red-600`} >{msg}</span>
    </div>

    <div className="mx-auto mt-10 w-[60%] md: w-full">
      <form className="space-y-6" onSubmit={handleSubmit} method="POST">
     
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            {/* <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div> */}
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formData.password}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='mx-auto w-[40%] '>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

   
    </div>
  </div>
  )
}

export default Login