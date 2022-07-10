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

  const logOut = () => {
    axios
      .post("https://akademia108.pl/api/social-app/user/logout", {
        "jwt_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvdXNlclwvbG9naW4iLCJpYXQiOjE1OTU5MjcwMTksImV4cCI6MTU5NTk2MzAxOSwibmJmIjoxNTk1OTI3MDE5LCJqdGkiOiI1SnBTVWNoU1htQ0lkWnZnIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.AZ24dPJrCkjhEkle9U78wS_hM5GdCCbmTFJwc9t5wok"

      })
      .then((res) => {
       
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
        <button className="postBtn" onClick={getOlderPosts}>
          Load more{" "}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
