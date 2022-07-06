import React, {useEffect} from "react";
import './GetLatest.css'


function GetLatest(props) {

    useEffect(() => {
        
    });



    return (
        <div className="postBoard">
            <div className="post">
                <div className="postAvatar">
                    <img src="http://placehold.it/" alt="#" />
                </div>
                <div className="postData">
                    <div className="postInfo">
                        <div className="postUserName"></div>
                        <div className="postDate"></div>
                    </div>
                    <div className="postContent"></div>
                    <div className="postLikes"></div>
                </div>
                <button className="postBtn postLoadMore">Load More</button>
            </div>
        </div>
    );
}

export default GetLatest;