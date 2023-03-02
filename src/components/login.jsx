import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from '../styles/login.css'

const Login = () => {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { email, password }
        axios.post("http://localhost:4000/login", data)
            .then((res) => {
                if (res.data.message == "Login Successfull") {
                    navigate('/home')
                }
                else{
                    alert(res.data.message)
                }
            })
    }

return (
    <div className="login">
        <h1 className="text-center text-dark fw-bolder fst-italic">Log in </h1>
        <div className="form w-50">
            <form action="" onSubmit={handleSubmit} >
                <div className="email m-4">
                    <input type="email" placeholder="Email ID" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="pwd m-4">
                    <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login_button m-4">
                    <button className="btn btn-outline-dark w-75 mt-3 fw-bold">Login</button>
                </div>
                <div className="signup_button m-4">
                    <p className="text-dark fw-semibold">Are you a new User ?</p>
                    <Link to="/signup" className="btn btn-outline-dark w-75 fw-bold">Sign up</Link>
                </div>
            </form>
        </div>
    </div>
);
}

export default Login;