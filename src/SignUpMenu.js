import "./SignUpMenu.css";

export default function SignUpMenu() {
    return (
        
        <div className="login-screen">
            <form id="login-menu">
                <input type="text" id="sign-login" placeholder="Login" required></input>
                <input type="email" id="sign-email" placeholder="Email" required></input>
                <input type="password" id="sign-password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Write Your Password" required></input>
                <input type="password" id="sign-password-check" placeholder="Check Your password" required></input>
                <input type="submit" value="SIGN UP"></input>
            </form>
        </div>
    );
}