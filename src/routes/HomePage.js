import "./HomePage.css";


export default function HomePage() {
    return (
        <div className="container">
            <h1> HOME PAGE</h1>
            <div className="postBoard">
                <div className="post">
                    <div className="postAvatar">
                        <img src="http://placehold.it/" alt="avatar of user" />
                    </div>
                    <div className="postData">
                        <div className="postInfo">
                            <div className="postUser"></div>
                            <div className="postDate"></div>
                        </div>
                        <div className="postContent"></div>
                        <div className="postLikes"></div>
                    </div>
                </div>
                <button className="postBtn postLoadMore"></button>
            </div>
        </div>
    );
}

