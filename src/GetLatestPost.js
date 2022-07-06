import React from "react";
import './GetLatestPost.css'

function GetLatestPost(props) {

    let usersData = props.getLatestPost;
   
    let postElements = usersData.map((usersDataObj) => {

        return (
            <div key={usersDataObj.userID} className="post">
                <div className="postAvatar">
                    <img src={usersDataObj.userAvatar} alt="#" />
                </div>
                <div className="postData">
                    <div className="postInfo">
                        <div className="postUserName">{usersDataObj.userName}</div>
                        <div className="postDate">{usersDataObj.postDate}</div>
                    </div>
                    <div className="postContent">{usersDataObj.content}</div>
                    <div className="postLikes">{}</div>
                </div>
            </div> 
        );
    })

    console.log(usersData);

    return (
        <div className="postBoard">
             {postElements}
             <button className="postBtn postLoadMore">Load More</button>
        </div>
    )
    
}

export default GetLatestPost;