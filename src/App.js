import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>FreeBook - Social Media</h1>

        <nav className="navbar">
          <Link to='HomePage'>Home</Link> 
          <Link to='LogInPage'>Log In</Link>
          <Link to='SignUpPage'>Sign Up</Link>
        </nav>
      
    </div>
  );
}

export default App;
