import React from 'react'
import './AddPost.css'

const AddPost = () => {
  return (
    <form className="AddPostForm">
        <label>Add New Post</label>
        <textarea name="addPost"/>
        <button className='addPostBtn'>+</button>
    </form>
  )
}

export default AddPost