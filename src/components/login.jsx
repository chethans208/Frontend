import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let handleSubmit = (e) => {
       
    }
    return (
        <div className="loh">
            <h1 className="text-primary">Login Page</h1>
            <div className="form w-25">
                <form action="" onSubmit={handleSubmit} >
                    <div className="email m-3">
                        <input type="email" placeholder="Email ID" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="pwd m-3">
                        <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="login_button m-3">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="signup_button m-3">
                        <p className="text-danger">Are you a new User ?</p>
                        <Link to="/signup" className="btn btn-outline-primary">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;