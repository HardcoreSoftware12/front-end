import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username:'',
        email:"",
        password:""
    })
    const [msg,setMsg] = useState()
    const [color,setColor] = useState()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
       
    };

    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(formData);
      const res = await axios.post("http://localhost:3000/user/register",formData);
      console.log(res.data);
    }

   



  return (
    <div className="mx-auto w-[40%] flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8 border-black">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center space-y-2">
     
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create your account with
      </h2>
      <span className={`text-red-600 text-${color}`} >{msg}</span>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit} method="POST">
      <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={formData.username}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>
        </div>
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

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Have Account?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Go to Login page
        </a>
      </p>
    </div>
  </div>
  )
}

export default Register