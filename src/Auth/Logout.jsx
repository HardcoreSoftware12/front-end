import axios from 'axios'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../components/Context/userContext';

function Logout() {
    
    const {getLoggedIn} = useContext(AuthContext)
    const history = useNavigate()
    async function handleLogout(){
      
        const res = await axios.get("https://back-end-mr6o.onrender.com/user/logout");
       
        await getLoggedIn();
        history("/login")

    


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