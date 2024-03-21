import React, { useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import axios from 'axios';



const categories = ['Web Dev', 'Science', 'Politics', 'Education','Entertainment','SelfHelp','Meditation'];

function CreatePost() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    smallDescription: '',
    photo: null,
    category: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };
  const handleImageChange =(e)=>{
    setFormData({...formData,photo:e.target.files[0]})
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('title',formData.title)
    postData.append('description',formData.description)
    postData.append('smallDescription',formData.smallDescription)
    postData.append('photo',formData.photo)
    postData.append('category',formData.category)
    try {
      const res = await axios.post('https://back-end-mr6o.onrender.com/notes/createpost',postData);
     
      window.alert("post saved successfully");
      setFormData({
        title: '',
        description: '',
        smallDescription: '',
        photo: null,
        category: '',
      })
      
    } catch (error) {
      console.error(error)
      
    }
    
  
  };
  return (
    <div className="w-[90%] mx-auto mt-8">
      <div className='mb-10'>  
      <h1 className="mx-auto w-fit text-2xl font-bold mb-4">Create New Item</h1>
      <p className='mx-auto w-fit'>required fields(<span className='text-red-800 text-xl '>*</span>)</p>
      </div>
   
    <form onSubmit={handleSubmit} className="space-y-6" encType='multipart/form-data'>
      {/* TITLE */}
      <div className="flex items-center mb-4">
        <label htmlFor="title" className="w-1/3 text-right pr-4">Title: <span className='text-red-800 text-xl'>*</span></label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border-b border-gray-400 w-full focus:outline-none"
        />
      </div>

    
      {/* SMALL DESCRIPTION  */}
      <div className="flex items-center mb-4">
        <label htmlFor="smallDescription" className="w-1/3 text-right pr-4">Small Description:<span className='text-red-800 text-xl'>*</span></label>
        <input
          type="text"
          id="smallDescription"
          name="smallDescription"
          value={formData.smallDescription}
          onChange={handleChange}
          className="border-b border-gray-400 w-full focus:outline-none"
        />
      </div>

      {/* FULL BLOG PARAGRAPH  */}
      <div className="flex items-center mb-4">
        <label htmlFor="description" className="w-1/3 text-right pr-4">Description:<span className='text-red-800 text-xl'>*</span></label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border-b border-gray-400 w-full h-32 focus:outline-none resize-none"
        />
      </div>

      {/* IMAGE FOR BLOG  */}
      <div className="flex items-center mb-4">
        <label htmlFor="photo" className="w-1/3 text-right pr-4">Banner Image:<span className='text-red-800 text-xl'>*</span></label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleImageChange}
          className="border-b border-gray-400 w-full focus:outline-none"
        />
      </div>


       {/* CHOOSE CATEGORY  */}
      <div className="flex items-center mb-4">
        <label htmlFor="category" className="w-1/3 text-right pr-4">Category:<span className='text-red-800 text-xl'>*</span></label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border-b border-gray-400 w-full focus:outline-none"
        >
          <option value="" disabled>Select category...</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
<div className='flex justify-center'>
<button type="submit" className="mx-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
</div>
      
    </form>
  </div>
  
 
  )
}

export default CreatePost