import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Context/userContext'
import Logout from '../../Auth/Logout';
import axios from 'axios';
import profile from "./profile.png";

let username,email;

const Navbar = () => {
  const {isLoggedIn,getLoggedIn} = useContext(AuthContext)
  const[toggle, setToggle] = useState(false);
  const history = useNavigate()

  async function handleLogout(){
    
      const res = await axios.get("http://localhost:8000/user/logout");
      console.log(res.data);
      setToggle(!toggle);
      await getLoggedIn();
      
      history("/login")

  }

  async function handleProfile(){
    setToggle(!toggle);

  }
  async function handleClick(){
    setToggle(false);

  }
  async function getUser(){
    
    const res = await axios.get("http://localhost:8000/user/getuser");
    username = res.data.username;
    email = res.data.email
    console.log(res.data);
    

}
  useEffect(()=>{
    getUser();

  },[])

  return (
    <div className='w-full h-[100px] flex justify-between items-center text-3xl bg-[#35374B] p-10'>
        {/* <h1 className='text-white'></h1> */}
        <div className='text-white '>
        <Link onClick={handleClick} to="/home">Blog-Dogg</Link>
        </div>


        <div className=''>
          {isLoggedIn === false && <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>}

          {
            isLoggedIn === true && 
              <div className='flex w-[100px]'>
                {/* <Link onClick={handleLogout} to="/logout">Logout</Link> */}
                <Link onClick={handleProfile} >
                  <div className='border-black rounded-xl w-[50px] h-[50px]'>
                    <img src={profile} alt="" />
                  </div>
                </Link>
            
              </div>

           
          }
          
        
        

        </div>
        <div className={`p-5 text-white text-2xl w-[400px] absolute right-0 top-[90px] ${toggle ? 'block' : 'hidden'} bg-[#282C34] rounded-lg`}>
          <div className='border-b-2'>
            <p>{username}</p>
            <p>{email}</p>
          </div>

          <div >
            <Link onClick={handleClick} to="/mypost"  className='hover:bg-[#F8F8F9]'>
              your posts
            </Link><br/>
            <Link onClick={handleClick} to="/createpost"  className='hover:bg-[#F8F8F9]'>
              Create post
            </Link><br/>
            <Link onClick={handleLogout} to="/logout">Logout</Link>

           

          </div>

        </div>
       
       
        
    </div>
  )
}

export default Navbar