import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserPosts() {
    const[posts,setPosts] = useState([]);
    async function getPosts(){
        const res = await axios.get("http://localhost:8000/notes/myposts")
        console.log(res.data.resp)
        setPosts(res.data.resp)
    }

    useEffect(()=>{
        getPosts();
        
    },[])

    async function handleDelete(id){
        const res= await axios.delete(`http://localhost:8000/notes/deletepost/${id}`)
        console.log(res);
        getPosts();

    }
  return (
   
    <ul>
        {posts.map(post => (
            <>
          <li key={post._id} className='mt-10'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Posted by: {post.userId}</p>
            <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
            {/* Add more fields as needed */}
          </li>
          <button onClick={()=>handleDelete(post._id)}>Delete</button>
          <Link to={`/update/${post._id}`}> Update</Link>   
          {/* dont miss slash here it will also take the path of this element */}
          </>
        ))}
      </ul>
  )
}

export default UserPosts