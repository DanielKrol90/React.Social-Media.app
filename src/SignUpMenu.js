import "./SignUpMenu.css";

export default function SignUpMenu() {
    return (
        
        <div className="login-screen2">
            <form id="login-menu">
                <input type="text" placeholder="Login"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Check your password"></input>
                <input type="submit" value="LOG IN"></input>
            </form>
        </div>

    );
}