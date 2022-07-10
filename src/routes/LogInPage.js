import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LogInPage.css";


const LogInPage = () => {
  const [user, setUser] = useState([]);
  
  axios.defaults.headers.common["Authorization"] = "Bearer " + (user ? user.jwt_token : "");

  useEffect(() => {
    userLogIn();
  }, []);


  const userLogIn = () => {

      axios
        .post("https://akademia108.pl/api/social-app/user/login",
        {
          "username": "adam",
          "password": "1234"
        } 
        )
        .then((res) => {
          setUser(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    };

  return (
        <div className="loginIn-screen">
          <h1>Sign In</h1>
          <form className="form-signIn">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
            />
            <button>Log In</button>
          </form>
          <p>
            Need a Account? <br />
            <span className="line">
              {/* miejsce na router do signuppage */}
              <a href="#">Sign Up!</a>
            </span>
          </p>
        </div>
      )}

export default LogInPage;
