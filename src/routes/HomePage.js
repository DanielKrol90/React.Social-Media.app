import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Post from "../components/Posts";

const HomePage = (props) => {
  const [posts, setPosts] = useState([]);
  const [oldPosts, setOldPosts] = useState([]);


  useEffect(() => {
    getLatestPosts();
    getOlderPosts();
  }, []);
  

  

  const getLatestPosts = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/latest")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  const getOlderPosts = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/older-then", {"date": "2020-05-05T07:02:14.000000Z"})

      .then((res) => 
       setOldPosts(res.data))

      .catch((err) => {
        console.log("AXIOS ERROR: ", err)
      })
  };

  return (
    <div className="container">
      <div className="postBoard">
        {posts.map((post) => {
          return <Post data={post} key={post.id} />
        })}
        <button className="postBtn"onClick={Post}>Load more </button>
      </div>
    </div>
  );
};

export default HomePage;
