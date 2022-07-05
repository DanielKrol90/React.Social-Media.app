import "./LogInMenu.css";

function LogInPage() {
    return (

        <div className="login-screen">
            <form id="login-menu">
                <input type="email" placeholder="Login"></input>
                <input type="password" placeholder="Enter your password"></input>
                <input type="submit" value="LOG IN"></input>
            </form>
        </div>
    );
}

export default LogInPage;