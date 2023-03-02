import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import signup from '../styles/signup.css';

const SignUp = () => {

    let [name, setName] = useState("")
    let [number, setNumber] = useState("")
    let [password, setPassword] = useState("")
    let [cpassword, setCpassword] = useState("")
    let [email, setEmail] = useState("")

    let navigate = useNavigate()
    
    let handleSignup = (e) => {
        e.preventDefault()
        let data = { name, number, password, cpassword, email }
        if (name && email && (password == cpassword)) {
            axios.post('http://localhost:4000/signup', data)
            .then((res) => {
                alert(res.data.message)
                navigate('/')
            })
        } else {
            alert("invalid credentials")
        }
    }
    return (
        <div className="signup">
            <h1 className="text-light text-center mb-4 fw-bold fst-italic">Sign Up </h1>
            <div className="form m-3 text-center">
                <form action="" onSubmit={handleSignup}>
                    <div className="Name m-4">
                        <input type="text" placeholder="Enter your name" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mobilenumber m-4">
                        <input type="tel" maxLength="10" minLength="10" name="number" className="form-control" placeholder="Contact Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="email m-4">
                        <input type="email" placeholder="Enter your Email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password m-4">
                        <input type="password" placeholder="Enter your password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="confirm_password m-4">
                        <input type="password" placeholder="Confirm your password" name="cpassword" className="form-control" value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                    </div>
                    <div className="signup_button m-4">
                        <button className="btn btn-outline-light w-75 ms-2 mt-2 fw-bold">Sign up</button>
                    </div>
                    <p className="text-dark fw-semibold">Have already an account ?</p>
                    <div className="login_button m-4">
                        <Link to="/login" className="btn btn-outline-light w-75 fw-bold">Login</Link>
                    </div>
                </form>
            </div> 
        </div>
    );
}

export default SignUp;