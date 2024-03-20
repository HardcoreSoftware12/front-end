import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../Context/userContext'
import Logout from '../../Auth/Logout';
import axios from 'axios';
import profile from "./profile.png";
import pitbull from "./pitbull.png"



const Navbar = () => {
  const {isLoggedIn,getLoggedIn} = useContext(AuthContext)
  const[toggle, setToggle] = useState(false);
  const[username,setUsername]=useState();
  const[email,setEmail] = useState();

  const history = useNavigate()

  async function handleLogout(){
    
      const res = await axios.get("http://localhost:8000/user/logout");
      
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
    setUsername(res.data.username)
    setEmail(res.data.email)
    

}
  useEffect(()=>{
    getUser();  

  },[])

  return (
    <div className='w-full h-[100px] flex justify-between items-center text-3xl bg-[#35374B] p-10'>
       
        <div className='text-white max-h-[50px] text-4xl'>
        <Link onClick={handleClick}  to="/" className='flex space-x-0 '>
          <span className='pt-2'>Blog</span>
          <img src={pitbull} alt="" className='max-w-[60px]' />
          <span className='pt-2'>Dogg</span>
        </Link>
        </div>


        <div className='flex  gap-5 text-sm mt-3 lg:text-4xl '>
          {isLoggedIn === false && <>
            <Link to="/register" className='bg-[#496989] text-white px-4 py-2 rounded-md hover:bg-blue-600'>Register</Link>
            <Link to="/login" className='bg-[#496989] text-white px-4 py-2 rounded-md hover:bg-blue-600'>Login</Link>
          </>}

          {
            isLoggedIn === true && 
              <div className='flex w-[100px]'>
                <Link onClick={handleProfile} >
                  <div className='border-black rounded-xl w-[50px] h-[50px]'>
                    <img src={profile} alt="" />
                  </div>
                </Link>
            
              </div>

           
          }
          
        
        

        </div>
        <div className={`rounded-t-2xl rounded-b-2xl text-white text-center text-2xl w-[350px] h-[420px]  absolute right-14 top-[80px] ${toggle ? 'block' : 'hidden'} bg-[#040D12] rounded-lg`}>
          <div className='w-full bg-[#008170] h-[100px] rounded-t-2xl'>
              <p className='pt-5'>{username}</p>
          </div>
          <div className='-mt-10 mx-auto rounded-2xl w-[90px]'><img src={profile} alt="" /></div>
          <div className='border-[#EEEEEE] border-b-2 text-2xl font-bold mb-5 mt-5 leading-10'>
            <p>{username}</p>
            <p className='mb-5'>{email}</p>
          </div>

          <div className='text-2xl leading-10'>
            <Link onClick={handleClick} to="/mypost"  className='hover:bg-[#31363F]'>
              your posts
            </Link><br/>
            <Link onClick={handleClick} to="/createpost"  className='hover:bg-[#353535]'>
              Create post
            </Link><br/>
            <Link onClick={handleLogout} to="/logout" className='hover:bg-[#353535]'>Logout</Link>

           

          </div>

        </div>
       
       
        
    </div>
  )
}

export default Navbar