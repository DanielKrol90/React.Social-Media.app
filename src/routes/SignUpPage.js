import React, { useState} from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";


const SignUpPage = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [validError, setValidError] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [userValidSignInMessege, setUserValidSignInMessege] = useState("");   
  const [validSignUp, setValidSignUp] = useState(false);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: target.value,
    });
  };

  const validateInputUser = () => {
    let validationCheckErrors = {
      username: false,
      email: false,
      password: false,
      passwordConfirm: false,
    };

    // validation for username input 

    if (formData.username.trim().length < 4) {
      validationCheckErrors.username = true;
      setValidError((prevErrors) => {
        return {
          ...prevErrors,
          username: "Username is too short. Username must be at least 4 characters.",
        };
      });
    } else if (!/^[^\s]*$/.test(formData.username.trim())) {
      validationCheckErrors.username = true;
      setValidError((prevErrors) => {
        return {
          ...prevErrors,
          username: "To create Username you can't use space",
        };
      });
    } else {
      validationCheckErrors.username = false;
      setValidError((prevErrors) => {
        return { ...prevErrors, username: "" };
      });
    }

    // validation for email input 
     if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      validationCheckErrors.email = true;
      setValidError((prevErrors) => {
        return {
          ...prevErrors,
          email: "Used email is not valid",
        };
      });
    } else {
      validationCheckErrors.email = false;
      setValidError((prevErrors) => {
        return { ...prevErrors, email: "" };
      });
    }

    // validation for password input 

    if (formData.password.trim().length < 6) {
      validationCheckErrors.password = true;
      setValidError((prevErrors) => {
        return {
          ...prevErrors,
          password: "Valid password neeeds to be at least 6 characters",
        };
      });
    } else if (!/^[^\s]*$/.test(formData.password.trim())) {
      validationCheckErrors.password = true;
      setValidError((prevErrors) => {
        return {
          ...prevErrors,
          password: "For Password You can't use space",
        };
      });
    } else if (
      !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(formData.password.trim())
    ) {
      validationCheckErrors.password = true;
      setValidError((prevErrors) => {
        return {
          ...prevErrors,
          password: "In password You need to Include special sign ex. ! @ # $.",
        };
      });
    } else {
      validationCheckErrors.password = false;
      setValidError((prevErrors) => {
        return { ...prevErrors, password: "" };
      });
    }

   // validation for passwordConfirm input 
    if (formData.password.trim() !== formData.passwordConfirm.trim()) {
      validationCheckErrors.passwordConfirm = true;
      setValidError((prevErrors) => {
        return {
          ...prevErrors,
          passwordConfirm: "Passwords confirm is not the same as password",
        };
      });
    } else {
      validationCheckErrors.repeatPassword = false;
      setValidError((prevErrors) => {
        return { ...prevErrors, passwordConfirm: "" };
      });
    }
    return (
      !validationCheckErrors.username &&
      !validationCheckErrors.email &&
      !validationCheckErrors.password &&
      !validationCheckErrors.passwordConfirm 
    );
 };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInputUser()) {
      return;
    }

  let newUser = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };

    axios
      .post("https://akademia108.pl/api/social-app/user/signup", newUser)
      .then((res) => {
        let resData = res.data;
   
        if (resData.signedup) {
          setUserValidSignInMessege("Account created");
          setValidSignUp(true);
         } else {
            if (resData.message.username) {
              setUserValidSignInMessege(resData.message.username[0]);
            } else if (resData.message.email) {
              setUserValidSignInMessege(resData.message.email[0]);
            }
    }})
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
    };

  return (
    <div className="loginSign-screen">
    {props.user && <Navigate to="/" />}
      <h1>Sign In</h1>
      <form id="login-menu" onSubmit={handleSubmit}>
      {userValidSignInMessege && <h2>{userValidSignInMessege}</h2>}
      <label htmlFor='username'>Login </label>
      {validError.username && <p>{validError.username}</p>}
        <input
          type="text"
          id="username"
          name="username"
          autoComplete="off"
          placeholder="Login"
          onChange={handleInputChange}
          required
          disabled={validSignUp}
        />
        {validError.email && <p>{validError.email}</p>}
         <label htmlFor='email'>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
          onChange={handleInputChange}
          required
          disabled={validSignUp}
        />
         {validError.password && <p>{validError.password}</p>}
         <label htmlFor='password'>Password </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Write Your Password"
          onChange={handleInputChange}
          required
          disabled={validSignUp}
        />
         {validError.passwordConfirm && <p>{validError.passwordConfirm}</p>}
         <label htmlFor='passwordConfirm'>Password Confirm </label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="Confirm Your Password"
          onChange={handleInputChange}
          required
          disabled={validSignUp}
        ></input>
        <button type="submit" disabled={validSignUp}>SIGN UP </button>
      </form>
      {validSignUp && (
          <div className="form-linked">
            <Link to="/LogInPage" className="btn">Go to LogIn Menu </Link>
          </div>
        )}
    </div>
  );
};

export default SignUpPage;
