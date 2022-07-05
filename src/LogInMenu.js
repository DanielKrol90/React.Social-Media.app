import "./LogInMenu.css";

export default function LogInMenu() {
    return (

        <div className="login-screen">
            <form id="login-menu">
                <input type="text" id="login-user" placeholder="Login" required></input>
                <input type="password" id="login-password" placeholder="Enter your password" required></input>
                <input type="submit" value="LOG IN"></input>
            </form>
        </div>
    );
}