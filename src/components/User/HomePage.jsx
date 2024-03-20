import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import PostCard from './PostCard';
import { useLocation } from 'react-router-dom';

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
        {/* {
            posts.map((post,i)=>(
                <div key={post._id}>
                 <p>{post.title}</p>
                 <p>{post.description}</p>
                </div>
               
            ))
        } */}
        <div className='flex flex-wrap justify-center gap-4'>
      
      
        {posts.map((post) => (
        //   <PostCard key={post._id} post={post} />
          <Cards key={post._id} post={post} />
        ))}
      
    </div>
        


    </div>
  )
}

export default HomePage