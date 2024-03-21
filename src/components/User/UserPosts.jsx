import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';

function UserPosts() {
  const[posts,setPosts] = useState([]);

  async function getMyPost(){
      let res = await axios.get("https://back-end-mr6o.onrender.com/notes/myposts")
      
      setPosts(res.data);


  }
  useEffect(()=>{
      getMyPost();

  },[])
  async function handleDelete(id){
    let res = await axios.delete(`https://back-end-mr6o.onrender.com/notes/deletepost/${id}`)
    setPosts(posts.filter(post=>post._id !== id))
   

  }
return (
  <div className='w-[90%] mx-auto border '>
    {
      !posts.length == 0  ? (
      <div className='flex flex-wrap justify-center gap-4'>
    
      {posts.map((post) => (
        <Cards key={post._id} post={post} onDelete={handleDelete} />
      ))}
    
  </div>
      ) : (
        <div className='mx-auto w-fit mt-10 text-4xl'>
          <h1>No posts yet create posts for free.</h1>
        </div>
      )
    }
      
  
    
  </div>
   
  )
}

export default UserPosts