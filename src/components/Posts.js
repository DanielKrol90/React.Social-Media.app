import React, {useState} from "react";
import axios from "axios";
import "./Posts.css";
import fblike from '../images/fblike.png';


const Post = (props) => {

  const [postsLength, setPostsLength] = useState(props.data.likes.length);
  console.log(props.data.likes);
  const addLike = () => {
    axios
    .post("https://akademia108.pl/api/social-app/post/like",
    	{ "post_id": props.data.id })
    .then((res) => {
      if (res.data.liked) {setPostsLength(postsLength +1)}
      console.log(res.data.liked)
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });
};
const deLike = () => {
  axios
  .post("https://akademia108.pl/api/social-app/post/dislike",
    { "post_id": props.data.id })
  .then((res) => {
    if (res.data.liked) {setPostsLength(postsLength -1)}
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
        {props.user && <button className="btnLikes" onClick={addLike}><img src={fblike} alt="like"/></button>}
        {props.user && <button className="btnUnLikes" onClick={deLike}><img src={fblike} alt="delike"/></button>}
        <div className="postLikes">{postsLength}</div>
      </div>
    </div>
  );
};

export default Post;
