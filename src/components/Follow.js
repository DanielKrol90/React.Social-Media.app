import React, { useState, useEffect } from "react";
import axios from "axios";

const Follow = (props) => {

  useEffect(() => {
    return () => {
      followRecommendations();
      followAllData();
    };
  }, []);

  const [followList, setFollowList] = useState([]);
  const [followAll, setFollowAll] = useState([]);

  const followRecommendations = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/recommendations")
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addFollow = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/follow", {
        leader_id: id,
      })

      .then((res) => {
        followAllData(res.data);
        followRecommendations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFollow = (id) => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/disfollow", {
        leader_id: id,
      })
      .then((res) => {
        followAllData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let liFollowList = followList.map((user) => {
    return (
      <li key={user.id}>
        <img src={user.avatar_url} alt="avatar" />
        <span>{user.username}</span>
        <button
          className="btnFollow"
          onClick={() => {
            addFollow(user.id);
          }}
        >
          Follow
        </button>
        <button
          className="btnUnFollow"
          onClick={() => {
            deleteFollow(user.id);
          }}
        >
          Unfollow
        </button>
      </li>
    );
  });

  let liFollowAll = followAll.map((user) => {
    return (
      <li key={user.id}>
        <img src={user.avatar_url} alt="avatar" />
        <span>{user.username}</span>
        <button
          className="btnUnFollow"
          onClick={() => {
            deleteFollow(user.id);
          }}
        >
          Unfollow
        </button>
      </li>
    );
  });

  return (
    <div className="followList">
      <div className="recDiv">
      <h2>Recomendations</h2>
        <ul className="rec-list">{liFollowList}</ul>
      </div>
      <div className="folowDiv">
        <h2>Followed</h2>
        <ul className="follow-list">{liFollowAll}</ul>
      </div>
    </div>
  );
};

export default Follow;
