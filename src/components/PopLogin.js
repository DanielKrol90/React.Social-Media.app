import React from "react";
import { Link,Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LogInPage from "../routes/LogInPage";


const PopLogin = (props) =>{
    const [popLogIn, setPopLogIn] = useState(false)

  useEffect(()=>{
    const timer = setTimeout(() => setPopLogIn(true), 10000);

    return () => {
        clearTimeout(timer)
      }
  },[])

    return (
      <div>
        {popLogIn&&<div className="popLogin">   
        {props.user && (<Navigate to="/" replace={true} />)}
        <div className="popLogin-item">
            <LogInPage setUser={props.setUser} user={props.user}/>
            <p>If You dont have Account, Register!</p>
            <div className="btn-timer"><Link to="/SignUpPage">Register</Link></div>
         </div>
        </div>}
      </div>     
    )
}

export default PopLogin;