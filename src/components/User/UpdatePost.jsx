import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdatePost() {
    const {id} = useParams();
    const[formData, setFormData] = useState({
        title: '',
        description: '',
        smallDescription: '',
        photo: '',
        category: '',
    })


    async function getPost(){
        try {
            const res = await axios.get(`http://localhost:8000/notes/getone/${id}`)
            console.log(res.data);
            setFormData({title:res.data.title,
                         description:res.data.description
                        });
            console.log(formData);
            
        } catch (error) {
            
        }
       
    }

    function handleUpdate(){

    }
    useEffect(()=>{
        getPost();
    },[])

  
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission logic here
       const res =  await axios.put(`http://localhost:8000/notes/updatepost/${id}`,formData)
       console.log(res.data);
    
      };
  return (
    <div className="max-w-lg mx-auto mt-8">
    <h1 className="text-2xl font-bold mb-4">Create New Item</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
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

      {/* <div className="flex items-center mb-4">
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

      <div className="flex items-center mb-4">
        <label htmlFor="photo" className="w-1/3 text-right pr-4">Photo:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleChange}
          className="border-b border-gray-400 w-full focus:outline-none"
        />
      </div>

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
      </div> */}

      <button type="submit" className="mx-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  </div>
  )
}

export default UpdatePost