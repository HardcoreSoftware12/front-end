import React, { useState } from 'react'
import HomePage from '../components/HomePage'
import Index from '../components/Index'

const Homepage = () => {
    // const user = document.cookie('')
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <div className='w-full my-class flex justify-center items-center'>
       
        {isLoggedIn ? <HomePage/> : <Index/>}

    </div>
  )
}

export default Homepage