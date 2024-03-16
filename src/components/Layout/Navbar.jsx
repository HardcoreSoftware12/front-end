import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Context/userContext'
import Logout from '../../Auth/Logout';
import axios from 'axios';

const Navbar = () => {
  const {isLoggedIn,getLoggedIn} = useContext(AuthContext)
  const history = useNavigate()
  async function handleLogout(){
    
      const res = await axios.get("http://localhost:3000/user/logout");
     
      await getLoggedIn();
      history("/login")

  


  }
  return (
    <div className='w-full h-[100px] flex justify-between items-center text-3xl bg-[#35374B] p-10'>
        {/* <h1 className='text-white'></h1> */}
        <div className='text-white '>
        <Link to="/">Blog-Dogg</Link>
        </div>


        <div className=''>
          {isLoggedIn === false && <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>}

          {
            isLoggedIn === true && <><Link onClick={handleLogout} to="/logout">Logout</Link></>

           
          }
        
        

        </div>
       
       
        
    </div>
  )
}

export default Navbar