import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/HomePage";
import LogInPage from "./routes/LogInPage";
import SignUpPage from "./routes/SignUpPage";

function App() {
  return (
    <div className="App">
      <h1>FreeBook - Social Media</h1>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="LogInPage">Log In</Link>
        <Link to="SignUpPage">Sign Up</Link>
      </nav>

      <Routes>
       
          <Route path="/" element={<HomePage />} />
          <Route path="LogInPage" element={<LogInPage />} />
          <Route path="SignUpPage" element={<SignUpPage />} />
       
      </Routes>
    </div>
  );
}

export default App;
