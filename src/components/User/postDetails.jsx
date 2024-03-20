import React, { useEffect, useState } from 'react'
import Footer from '../Layout/Footer'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';



function PostDetails() {
  let {id} = useParams();
  console.log(id);
  
  const[username,setUsername]=useState('')
  const [post, setPost] = useState()
  
  async function getUser(id){
    
    const res = await axios.get(`http://localhost:8000/user/getuserbyid/${id}`);
    setUsername(res.data.username)
    console.log(res.data);
    

}

async function getPost(id){
    
  const res = await axios.get(`http://localhost:8000/notes/getone/${id}`);
  setPost(res.data)
  console.log(res.data);
  

}

  useEffect(()=>{
    
    if(id){
      getPost(id);
    }
   
  },[id])

  useEffect(()=>{
    
    if(post){
      getUser(post.userId);
    }
   
  },[post])
  

    
  return (
    <div className='w-[90%] mx-auto mt-5'>
    {post ? ( // Check if post is defined
    <>
      <div className='w-full p-5 desktop:flex justify-between gap-10 p-0 mt-10'>
        <div className='w-[100%] mt-10 space-y-5 desktop:w-[40%]'>
          <p>{post.category} 10 MINUTE READ</p>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{post.title}</h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>{post.smallDescription}</p>

          <div className='relative mt-8 flex items-center gap-x-4'>
            <img
              src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2Fcontent%2Fcover_image_file%2Fcover_image%2F1334817%2Fretina_500x200_Designing-High-Converting-Websites-Leverage-Webflow-for-Business-Success_Blog-0b73de8aee9299d8824d8b58598b6037.png"
              alt=''
              className='h-10 w-10 rounded-full bg-gray-50'
            />
            <div className='text-sm leading-6'>
              <p className='font-semibold text-gray-900'>
                <span className='absolute inset-0' />
                BY {username}
              </p>
              <p className='text-gray-600'>Web Developer</p>
            </div>
          </div>
        </div>
        <div className='w-full mt-4 desktop:w-[60%] bg-cover'>
          <img
            className='mx-auto w-full max-w-[770px] max-h-[430px]'
            src={`http://localhost:8000/uploads/${post.photo.replace('uploads\\', '')}`}
            alt=''
          />
        </div>
      
      </div>
        <div className='w-[80%] mx-auto text-[25px] mt-10'>
        <p>
          {post.description}
        </p>
      </div>
      </>
    ) : (
      <p className='mx-auto text-3xl'>Loading...</p> // Render a loading message while post is undefined
    )}
  </div>
);
  
   
   
}

export default PostDetails