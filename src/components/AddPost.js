import React, { useState } from 'react';
import axios from "axios";
import './AddPost.css'

const AddPost = () => {

  const [postsData, setPostsData] = useState([]);


  const handleChange = (e) => {
    setPostsData({value: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const sendUserPost = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/add", { 
        "content": postsData.value
      })
      .then((res) => {
        setPostsData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  
  return (
    <form className="AddPostForm" onSubmit={handleSubmit} >
        <label>Add New Post</label>
        <textarea name="addPost" onChange={handleChange}  />
        <button className='addPostBtn' type='submit' onClick={sendUserPost}  >+</button>
    </form>
  )
}

export default AddPost