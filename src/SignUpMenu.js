
import "./SignUpMenu.css";


<input type='password' onMouseOver={()=>{ }}/>






export default function SignUpMenu() {

    return (
        
        <div className="login-screen">
            <form id="login-menu">
                <input type="text" id="sign-login" placeholder="Login" required></input>
                <input type="email" id="sign-email" placeholder="Email" required></input>
                <input type="password" id="sign-password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Write Your Password" required></input>
                <input type="password" id="sign-password-confirm" placeholder="Confirm Your Password" required></input>
                <input type="submit" value="SIGN UP"></input>
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