import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'



function Cards({post,onDelete}) {
    
   
    
  return (
    
    <div className='w-80 bg-white border rounded-lg shadow-md p-4 mb-10 mt-10 max-h-[500px] overflow-hidden mb-10'>
    <img  src={`https://back-end-mr6o.onrender.com/uploads/${post.photo.replace('uploads\\', '')}`} alt={post.title} className='w-full h-auto rounded-lg mb-4 max-w-[300px] max-h-[200px] min-h-[200px]' />
    <div>
      <p className='text-sm text-gray-500'>{post.category}</p>
      <Link to={`/postdetails/${post._id}`}>
        <h1 className='text-lg font-bold mb-2'>{post.title}</h1>
      </Link>
      {/* {
        onDelete &&(<p className='text-base '>{post.description}</p>)
      } */}
      
    </div>
    {
      onDelete && (
        <div className='mt-10 flex gap-5'>
        <Link to={`/update/${post._id}`} className='bg-[#87A922] text-white px-4 py-2 rounded-md hover:bg-blue-600'>Update</Link>
        <button  onClick={()=>onDelete(post._id)} className='bg-[#E72929] text-white px-4 py-2 rounded-md hover:bg-blue-600'>Delete</button>
    
        </div>

      )
    }
   
      


    
    </div>
   
  
  )
}

export default Cards