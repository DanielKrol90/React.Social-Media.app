import React, { useEffect, useState } from "react";
import axios from "axios";
import AddPost from "../components/AddPost";
import Post from "../components/Posts";
import Follow from "../components/Follow";
import PopLogin from "../components/PopLogin";

const HomePage = (props) => {
  const [posts, setPosts] = useState([]);

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

  const btnForPostDown = document.querySelector('.postBtn');
  const callback = (checkPosts) => {
    checkPosts.forEach(checkPost => {
      if(checkPost.isIntersecting){
        getOlderPosts()
      }
    });
  }
  const options ={
    rootMargin: "0px",
    threshold: 0.9,
    delay: 5000,
  }
  const observer = new IntersectionObserver(callback, options);
  
  if(btnForPostDown)observer.observe(btnForPostDown);


  useEffect(() => {
    getLatestPosts();
  }, [props.user]);


  return (
    <div className="container">
     {!props.user&&<PopLogin user={props.user} setUser={props.setUser}/>}
      {props.user && (<Follow getLatestPosts={getLatestPosts}/> )}
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
