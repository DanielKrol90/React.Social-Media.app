import React, { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

const LogInPage = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const target = e.target;

    setFormData((prevData) => {
      return { ...prevData, [target.name]: e.target.value };
    });
  };

  const userLogIn = (e) => {
    e.preventDefault();

    axios
      .post("https://akademia108.pl/api/social-app/user/login", {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        
      
        if (res.data.error) {
          console.log("uzytkownik nie istnieje")
        } else {
          localStorage.setItem("user", JSON.stringify(res.data));
          props.setUser(res.data);
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  

  return (
    <div className="loginIn-screen">
      {props.user && <Navigate to="/" />}
      <h1>Log In</h1>
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
      </p>
      <Link className="reg-pop" to="/SignUpPage">Register</Link>
    </div>
  );
};

export default LogInPage;
