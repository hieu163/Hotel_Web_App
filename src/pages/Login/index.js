
import { useState } from "react";
import "./login.css"
import Register from "../../components/Register";
import Login from "../../components/Login";
const LoginPage = () => {

    const [loginState, setLogin] = useState(true);

    const swap = () => {
        setLogin(!loginState);
    }

    return (
        <>
            <div className="wrapper">
                <div className="form-box">

                    {
                        loginState
                            ? <>
                                <Login swap={swap} />
                            </>
                            : <>
                                <Register swap={swap}/>
                            </>
                    }
                </div>
            </div>
        </>
    )
}
export default LoginPage;