import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Post from "../components/Posts";


const HomePage = (props) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      getLatestPosts();
    }, []);
  
    const getLatestPosts = () => {
      axios
        .post("https://akademia108.pl/api/social-app/post/latest")
        .then((res) => {
          setPosts(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    };
  
    return (
   
        <div className="postBoard">
            {posts.map((post) => { return <Post data={post} key={post.id} />})}
            <button className="postBtn">Load more</button>
        </div>
     
    );
  };
  
  export default HomePage;