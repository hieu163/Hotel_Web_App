const Login = (props) => {
    const {swap} = props;
    return (
        <>
            <div className="login-container" id="login">
                <div className="top">
                    <span>Don't have an account? <a href="#" onClick={swap}>Sign Up</a></span>
                    <header>Login</header>
                </div>
                <div className="input-box">
                    <input type="text" className="input-field" placeholder="Username or Email" />
                    <i className="bx bx-user"></i>
                </div>
                <div className="input-box">
                    <input type="password" className="input-field" placeholder="Password" />
                    <i className="bx bx-lock-alt"></i>
                </div>
                <div className="input-box">
                    <input type="submit" className="submit" value="Sign In" />
                </div>
                <div className="two-col">
                    <div className="one">
                        <input type="checkbox" id="login-check" />
                        <label htmlFor="login-check"> Remember Me</label>
                    </div>
                    <div className="two">
                        <label><a href="#">Forgot password?</a></label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;