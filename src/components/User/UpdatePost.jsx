import React, { useEffect, useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { useParams } from 'react-router-dom';



const categories = ['Web Dev', 'Science', 'Politics', 'Education','Entertainment','SelfHelp','Meditation'];

function UpdatePost() {
  const {id} = useParams()
  
  const [post, setPost] = useState()
  const [msg, setMsg] = useState()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    smallDescription: '',
    photo: null,
    category: '',
  });
  async function getPost(id){
    
    const res = await axios.get(`https://back-end-mr6o.onrender.com/notes/getone/${id}`);
    setPost(res.data)
   
    
  
  }
  useEffect(()=>{
    if(id){
      getPost(id);
    }
  },[id])
  useEffect(() => {
    
    if (post) {
      setFormData({
        title: post.title,
        description: post.description,
        smallDescription: post.smallDescription,
        photo: post.photo,
        category: post.category,
      });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append('title', formData.title);
    updatedData.append('description', formData.description);
    updatedData.append('smallDescription', formData.smallDescription);
    updatedData.append('photo', formData.photo);
    updatedData.append('category', formData.category);
    
    try {
      const res = await axios.put(`https://back-end-mr6o.onrender.com/notes/updatepost/${post._id}`, updatedData);
      setMsg(res.data.msg);
     
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-[90%] mx-auto mt-8">
    <h1 className="w-fit mx-auto text-2xl font-bold mb-10">Create New Item</h1>
    <p className='text-green-500 mx-auto w-fit mb-5'>{msg}</p>
    <form onSubmit={handleSubmit} className="space-y-6" encType='multipart/form-data'>
      {/* TITLE */}
      <div className="flex items-center mb-4">
        <label htmlFor="title" className="w-1/3 text-right pr-4">Title:</label>
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
        <label htmlFor="smallDescription" className="w-1/3 text-right pr-4">Small Description:</label>
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
        <label htmlFor="description" className="w-1/3 text-right pr-4">Description:</label>
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
        <label htmlFor="photo" className="w-1/3 text-right pr-4">Banner Image:</label>
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
        <label htmlFor="category" className="w-1/3 text-right pr-4">Category:</label>
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
          <button type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">
              Submit
          </button>
      </div>
      
    </form>
  </div>
    
    
   
  
 
  )
}

export default UpdatePost