import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const target = e.target;

    setFormData((prevData) => {
      return { ...prevData, [target.name]: e.target.value };
    });
  };

  const signUpNewUser = (e) => {
    e.preventDefault();

    axios
      .post("https://akademia108.pl/api/social-app/user/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        setFormData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  return (
    <div className="loginSign-screen">
     <h1>Sign In</h1>
      <form id="login-menu" onSubmit={signUpNewUser}>
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="off"
          placeholder="Login"
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          placeholder="Write Your Password"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          id="password-confirm"
          name="password-confirm"
          placeholder="Confirm Your Password"
          required
        ></input>
        <input type="submit" value="SIGN UP" />
      </form>
      <div id="message">
        <h3>Password must contain the following:</h3>
        <p id="letter">
          A <b>lowercase</b> letter
        </p>
        <p id="capital">
          A <b>capital (uppercase)</b> letter
        </p>
        <p id="number">
          A <b>number</b>
        </p>
        <p id="length">
          Minimum <b>8 characters</b>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
