import React, { Component, } from "react";
import axios from "axios";
import "./HomePage.css";
import GetLatestPost from "../GetLatestPost"


class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usersData: []
        };
    }

    componentDidMount() {
        this.getLatestPosts();
    }

    getLatestPosts = () => {

        let postData = {
            username: "username",
            password: "password"
            };
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + <jwtToken/>
            }
        };
       
        axios.post('https://akademia108.pl/api/social-app/post/latest', 
            postData, 
            axiosConfig)
            .then((res) => {
               const tickers = res.data;

               this.setState((state) => {
                let newBoardOfPosts = [];

                for (const [ticker, postData ] of Object.entries(tickers)) {
                    let postDataObject = {
                        user: ticker,
                        userID: postData.id,
                        content: postData.content,
                        postDate: postData.created_at,
                        updateDate: postData.updated_at,
                        likes: postData.likes,
                        userData: postData,
                        userName: postData.user.username,
                        userAvatar: postData.user.avatar_url
                    }

                    newBoardOfPosts.push(postDataObject);
                }
                
                return ({
                    usersData: newBoardOfPosts
                });

               })
            })
    }

    render() {
        return (
            <div className="container">
                <h1> HOME PAGE</h1>
                <GetLatestPost getLatestPost={this.state.usersData} />
            </div>
        );
    }
}


export default HomePage;