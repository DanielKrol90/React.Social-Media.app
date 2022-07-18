import React, { useState } from "react";
import axios from "axios";
import "./Posts.css";
import fblike from "../images/fblike.png";

const Post = (props) => {
  const [likeList, setLikeList] = useState(props.data.likes.length);
  const [doesUserLiked, setDoesUserLiked] = useState(props.data.likes.filter((like) => 
  like.username === props.user?.username)
      .length !== 0
  );

  const addLike = (e) => {
    e.preventDefault();

    axios
      .post("https://akademia108.pl/api/social-app/post/like", {
        post_id: props.data.id,
      })
      
      .then((res) => {

        if (res.data.liked) {
          setLikeList(likeList +1);
          setDoesUserLiked(!doesUserLiked);
        }
        
      })

      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  const deLike = (e) => {
    e.preventDefault();

    axios
      .post("https://akademia108.pl/api/social-app/post/dislike", {
        post_id: props.data.id,
      })
      .then((res) => {
        if (!res.data.liked) {
          setLikeList(likeList - 1);
          setDoesUserLiked(!doesUserLiked);
        }
        console.log(res.data)
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  const deletePost = () => {
    axios
      .post("https://akademia108.pl/api/social-app/post/delete", { 
        "post_id": props.data.id 
      })
      .then((res) => {
        
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };


  return (
    <div key={props.data.id} className="post">
      <div className="postAvatar">
        <img src={props.data.user.avatar_url} alt="#" />
      </div>
      <div className="postData">
        <div className="postInfo">
          <div className="postUserName">{props.data.user.username}</div>
          <div className="postDate">
            <span className="spanDate">
              {props.data.created_at.substr(0, 10)}
            </span>
            <span className="spanDate">
              {props.data.created_at.substr(11, 5)}
            </span>
          </div>
        </div>
        <div className="postContent">{props.data.content}</div>
        {props.user && !doesUserLiked && (
          <button className="btnLikes" onClick={addLike}>
            <img src={fblike} alt="like" />
          </button>
        )}
        {props.user && doesUserLiked && (
          <button className="btnUnLikes" onClick={deLike}>
            <img src={fblike} alt="delike" />
          </button>
        )}
        {props.user && props.data.user.username === props.user.username &&(
          <button className="btnDeletePost" onClick={deletePost}>
           <b>X</b>
          </button>
        )}
        
        <div className="postLikes">{likeList}</div>
      </div>
    </div>
  );
};

export default Post;
