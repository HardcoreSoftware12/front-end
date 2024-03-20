import React from 'react'
import { Link } from 'react-router-dom'

const Front = () => {
  return (
   <div className='flex-row  w-[80%] h-full   mx-auto mt-10 '>
    <div className='text-7xl mt-10'>
      <h1>
          One platform,<br/>
          infinite possibilities</h1>
    </div>

    <div className='mt-10 flex'>
      <div className=''>
        {/* <hr className='w-[80%] border' /> */}
        <div className='border-t-2 border-black w-[80%]'></div>
        <h1 className='text-3xl mt-10 mb-5'>Unlimited creation</h1>
        <p className='w-[80%] text-2xl'>Create a Blog with a complete suite of advanced functionalities and bring your vision to life.</p>
      </div>
      
      <div className=''>
        {/* <hr className='w-[80%] border' /> */}
        <div className='border-t-2 border-black w-[80%]'></div>
        <h1 className='text-3xl mt-10 mb-5'>Share with friends</h1>
        <p className='w-[80%] text-2xl'>Flex your skills by sharing your blogs with friends and family.</p>
      </div>

      <div className=''>
        {/* <hr className='w-[80%] border' /> */}
        <div className='border-t-2 border-black w-[80%]'></div>
        <h1 className='text-3xl mt-10 mb-5'>Learn and Grow</h1>
        <p className='w-[80%] text-2xl'>Through insightful articles, industry analysis, and practical tips shared by seasoned professionals.</p>
      </div>

      </div>

<Link to="/register">
<div className='mt-10 w-[180px] h-[50px] rounded-3xl  bg-[#124076] text-white text-center pt-2 text-2xl'>
        <button>Get Stared</button>
      </div>
</Link>
     
    

   </div>
  )
}

export default Front