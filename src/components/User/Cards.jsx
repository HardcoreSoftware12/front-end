import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'



function Cards({post,onDelete}) {
    console.log(post);
   
    
  return (
    
    <div className='w-80 bg-white border rounded-lg shadow-md p-4 mb-10 mt-10 max-h-[500px] overflow-hidden'>
    <img  src={`http://localhost:8000/uploads/${post.photo.replace('uploads\\', '')}`} alt={post.title} className='w-full h-auto rounded-lg mb-4 max-w-[300px] max-h-[200px] min-h-[200px]' />
    <div>
      <p className='text-sm text-gray-500'>{post.category}</p>
      <Link to={`/postdetails/${post._id}`}>
        <h1 className='text-lg font-bold mb-2'>{post.title}</h1>
      </Link>
      <p className='text-base '>{post.description}</p>
    </div>
    {
      onDelete && (
        <div>
        <Link to={`/update/${post._id}`}>Update</Link>
        <button  onClick={()=>onDelete(post._id)}>Delete</button>
    
        </div>

      )
    }
   
      


    
    </div>
   
  
  )
}

export default Cards