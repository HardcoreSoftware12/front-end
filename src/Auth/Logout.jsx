import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../components/Context/userContext';

function Logout() {
    
    const {getLoggedIn} = useContext(AuthContext)
    const history = useNavigate()
    async function handleLogout(){
      
        const res = await axios.get("http://localhost:8000/user/logout");
       
        await getLoggedIn();
        history("/login")

    //     e.preventDefault();
    //   console.log(formData);
    //   const res = await axios.post("http://localhost:3000/user/login",formData);
    //   await getLoggedIn();
    //   history("/");


    }
    

  return (
    <>
    {/* <div className='mx-auto border w-[70%] h-[100%] text-center'>
        <h1>Sure you want to logout</h1>
        <button className='bg-[#A0153E]' onClick={handleLogout}> Logout</button>

    </div> */}
    
    </>
  )
}

export default Logout