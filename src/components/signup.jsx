import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
            <h1>SignUp page</h1>
            <div className="form w-25 m-3">
                <form action="" onSubmit={handleSignup}>
                    <div className="Name m-3">
                        <input type="text" placeholder="Enter your name" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mobilenumber m-3">
                        <input type="tel" maxLength="10" minLength="10" name="number" className="form-control" placeholder="Contact Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="email m-3">
                        <input type="email" placeholder="Enter your Email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password m-3">
                        <input type="password" placeholder="Enter your password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="confirm_password m-3">
                        <input type="password" placeholder="Confirm your password" name="cpassword" className="form-control" value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                    </div>
                    <div className="signup_button m-3">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                    <div className="login_button m-3">
                        <Link to="/" className="btn btn-primary">Login</Link>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default SignUp;