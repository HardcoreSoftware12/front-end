import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.smallDescription}</p>
      <p>{post.description}</p>
      <p>Category: {post.category}</p>
      <img src={`https://back-end-mr6o.onrender.com/uploads/${post.photo.replace('uploads\\', '')}`} alt={post.title} />
      {/* Assuming 'http://localhost:5000' is the base URL where your images are served */}
      {/* Adjust the URL based on your actual server setup */}
      <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default PostCard;
