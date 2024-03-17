import axios from 'axios';
import React, { useEffect, useState } from 'react'

function HomePage() {
    const[posts,setPosts] = useState([]);

    async function getAllPost(){
        let res = await axios.get("http://localhost:3000/notes/getNote")
        console.log(res.data.notes);
        setPosts(res.data.notes);


    }
    useEffect(()=>{
        getAllPost();

    },[])
  return (
    <div>
        Home page where you can c all posts by all users
        {
            posts.map((post,i)=>(
                <>
                 <p>{post.title}</p>
                <p>{post.description}</p>
                </>
               
            ))
        }


    </div>
  )
}

export default HomePage