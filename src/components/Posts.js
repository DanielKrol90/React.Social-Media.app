import React from "react";
import "./Posts.css";

const Post = (props) => {
  return (
    <div key={Post.id} className="post">
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
        <div className="postLikes">{props.data.likes.length}</div>
      </div>
    </div>
  );
};

export default Post;
