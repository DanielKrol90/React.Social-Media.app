import React, {useState} from "react";
import axios from "axios";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./routes/HomePage";
import LogInPage from "./routes/LogInPage";
import SignUpPage from "./routes/SignUpPage";


function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  axios.defaults.headers.common["Authorization"] = "Bearer " + (user ? user.jwt_token : "");

  const logOut = (e) => {
    e.preventDefault();
    
    axios
      .post("https://akademia108.pl/api/social-app/user/logout")
      .then(() => {
        localStorage.removeItem('user');
        setUser(null);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  

  return (
    <div className="App">
      <h1>FreeBook - Social Media</h1>

      <nav className="navbar">
        <Link to="/">Home</Link>
        {!user&&<Link to="LogInPage">Log In</Link>}
        {!user&&<Link to="SignUpPage">Sign Up</Link>}
        {user&&<Link onClick={logOut} to="/" >Log Out</Link>}
      </nav>

      <Routes>
       
          <Route path="/" element={<HomePage setUser={setUser} user={user} />} />
          <Route path="LogInPage" element={<LogInPage setUser={setUser} user={user} />} />
          <Route path="SignUpPage" element={<SignUpPage /> } />
       
      </Routes>
    </div>
  );
}

export default App;
