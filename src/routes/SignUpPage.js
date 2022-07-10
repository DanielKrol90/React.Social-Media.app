import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./SignUpPage.css";

const SignUpPage = (props) => {
    
    const [newUser, setNewUser] = useState([]);

    
    useEffect(() => {
        signUpNewUser();
    }, []);

    const signUpNewUser = () => {
        axios
          .post("https://akademia108.pl/api/social-app/user/signup", {
            "username": "dante",
            "email": "error@hansbot.pl",
            "password": "password",
        })
          .then((res) => {
            setNewUser(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err);
          });
      };


return (
    
    <div className="loginSign-screen">
        <form id="login-menu">
            <input type="text" id="sign-login" autoComplete="off" placeholder="Login" required/>
            <input type="email" id="sign-email" autoComplete="off" placeholder="Email" required/>
            <input type="password" id="sign-password"  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Write Your Password" required/>
            <input type="password" id="sign-password-confirm" placeholder="Confirm Your Password" required></input>
            <input type="submit" value="SIGN UP"/>
        </form>
        <div id="message">
            <h3>Password must contain the following:</h3>
            <p id="letter">A <b>lowercase</b> letter</p>
            <p id="capital">A <b>capital (uppercase)</b> letter</p>
            <p id="number">A <b>number</b></p>
            <p id="length">Minimum <b>8 characters</b></p>
        </div>
    </div>
);
}
      

export default SignUpPage