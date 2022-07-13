import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Post from "../components/Posts";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatestPosts();
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
      .post("https://akademia108.pl/api/social-app/post/older-then", {
        date: posts[posts.length - 1].created_at,
      })
      .then((res) => {
        setPosts(posts.concat(res.data));
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };


  return (
    <div className="container">
      <div className="postBoard">
        {posts.map((post) => {
          return <Post data={post} key={post.id} />;
        })}
        {<button className="postBtn" onClick={getOlderPosts}>
          Load more
        </button>}}
      </div>
    </div>
  );
};

export default HomePage;
