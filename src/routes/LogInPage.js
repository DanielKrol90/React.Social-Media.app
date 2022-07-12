import React, { useState } from "react";
import axios from "axios";
import "./LogInPage.css";
import { Navigate } from "react-router-dom";


const LogInPage = (props) => {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
})

  const handleInputChange = e => {
    const target = e.target

    setFormData(prevData=>{
        return {...prevData, [target.name]: e.target.value }
    })
}

  const userLogIn = (e) => {

    e.preventDefault();

      axios
        .post("https://akademia108.pl/api/social-app/user/login",
        {
          "username": formData.username,
          "password": formData.password
        } 
        )
        .then((res) => {
          props.setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    };

    console.log(formData)

  return (
        <div className="loginIn-screen">
        {props.user&&<Navigate to="/"/> }
          <h1>Sign In</h1>
          <form className="form-signIn" onSubmit={userLogIn}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInputChange}
              required
            />
            <button>Log In</button>
          </form>
          <p>
            Need a Account? <br />
            <span className="line">
              <a href="SignUpPage"> Sign Up!</a>
            </span>
          </p>
        </div>
      )}

export default LogInPage;
