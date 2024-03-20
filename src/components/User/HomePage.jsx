import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import Footer from '../Layout/Footer';
function HomePage() {
   
    const[posts,setPosts] = useState([]);

    async function getAllPost(){
        let res = await axios.get("http://localhost:8000/notes/getnote")
        
        setPosts(res.data);


    }
    useEffect(()=>{
        getAllPost();

    },[])
  return (
    <>
    
    <div className='w-[90%] mx-auto border h-[100vh] '>
       
        <div className='flex flex-wrap justify-center gap-4'>
      
      
        {posts.map((post) => (
          <Cards key={post._id} post={post} />
        ))}
      
    </div>
        


    </div>
    
    
    </>
  )
}

export default HomePage