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
        console.log(res.data);
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

  const addFollow = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/follow", {
        leader_id: props.user.id,
      })

      .then((res) => {
        followAllData(res.data);
        followRecommendations(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFollow = () => {
    axios
      .post("https://akademia108.pl/api/social-app/follows/disfollow", {
        leader_id: props.user.id,
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
          UnFollow
        </button>
      </li>
    );
  });

  return (
    <div className="followList">
        <h2 className="RecListHeader">Recomendation to Follow</h2>
        <ul className="rec-list">{liFollowList}</ul>
        <h2 className="followListHeader">List of Followed</h2>
        <ul className="follow-list">{liFollowAll}</ul>
    </div>
  );
};

export default Follow;
