import "./LogInMenu.css";

export default function LogInMenu() {
    return (

        <div className="login-screen">
            <form id="login-menu">
                <input type="text" placeholder="Login"></input>
                <input type="password" placeholder="Enter your password"></input>
                <input type="submit" value="LOG IN"></input>
            </form>
        </div>
    );
}