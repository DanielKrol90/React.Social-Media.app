import React, {useState} from "react";
import axios from "axios";

const Follow = (props) => {

  const [followList, setFollowList] = useState([]);
  const [followAll, setFollowAll] = useState([]);

  const followRecommendations = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/recommendations",)
      .then((res) => {
        setFollowList(res.data);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  const followAllData = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/allfollows")
      .then((res) => {
        setFollowAll(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addFollow = (e, id) => {
    e.preventDefault();
    axios
      .post("https://akademia108.pl/api/social-app/follows/follow", {
        leader_id: id,
      })

      .then((res) => {
        props.followAllData();
        props.followRecommendations()
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const deleteFollow = (e) => {
    e.preventDefault();
    axios
      .post("https://akademia108.pl/api/social-app/follows/disfollow", {
        leader_id: props.data.id,
      })
      .then((res) => {
        props.followAllData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let liFollowList = setFollowList.map((user) => {

    return (
      <li key={user.id}>
        <img src={user.avatar_url} alt="avatar" />
        <span>{user.username}</span>
        <button onClick={(e) => {deleteFollow(user.id);}}>
          Usuń
        </button>
        <button onClick={(e) => {addFollow(user.id);}}>
          Dodaj
        </button>
      </li>
    );
  });

  return (
    <div className="followList">
      <h2>Lista obserwowanych:</h2>
      <ul>{liFollowList}</ul>
    </div>
  );
};

export default Follow;
