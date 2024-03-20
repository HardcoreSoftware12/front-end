import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';
function HomePage() {
   
    const[posts,setPosts] = useState([]);

    async function getAllPost(){
        let res = await axios.get("http://localhost:8000/notes/getnote")
        console.log(res.data);
        setPosts(res.data);


    }
    useEffect(()=>{
        getAllPost();

    },[])
  return (
    <div className='w-[90%] mx-auto border '>
       
        <div className='flex flex-wrap justify-center gap-4'>
      
      
        {posts.map((post) => (
          <Cards key={post._id} post={post} />
        ))}
      
    </div>
        


    </div>
  )
}

export default HomePage