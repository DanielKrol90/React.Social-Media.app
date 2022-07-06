import React, { Component, } from "react";
import axios from "axios";
import "./HomePage.css";
import GetLatest from "../GetLatest"


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
                console.log(tickers);

                for (const [ticker, postData ] of Object.entries(tickers)) {
                    let postDataObject = {
                        user: ticker,
                        userID: postData.id,
                        content: postData.content,
                        postDate: postData.created_at,
                        updateDate: postData.updated_at,
                        likes: postData.likes,
                        userData: postData.user
                    }

                    newBoardOfPosts.push(postDataObject);
                }
                
                console.log(newBoardOfPosts);

               })
            })
    }

    render() {
        return (
            <div className="container">
                <h1> HOME PAGE</h1>
                <GetLatest />
            </div>
        );
    }
}


export default HomePage;