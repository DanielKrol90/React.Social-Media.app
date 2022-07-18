import React, { useEffect, useState } from "react";
import axios from "axios";
import AddPost from "../components/AddPost";
import Post from "../components/Posts";
import Follow from "../components/Follow";

const HomePage = (props) => {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    getLatestPosts();
  }, [props.user]);

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

  const getNewerThenPosts = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/newer-then", {
        date: posts[0].created_at,
      })
      .then((res) => {
        setPosts(res.data.concat(posts));
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  return (
    <div className="container">
      {props.user && (<Follow user={props.user}/> )}
      {props.user && <AddPost getNewerThenPosts={getNewerThenPosts} />}
      <div className="postBoard">
        {posts.map((post) => {
          return (
            <Post
              data={post}
              user={props.user}
              key={post.id}
              setPosts={setPosts}
            />
          );
        })}
        {props.user && (
          <button className="postBtn" onClick={getOlderPosts}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
