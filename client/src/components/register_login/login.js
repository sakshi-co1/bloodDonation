import React, {useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import "./loginSign.css"
function Login() {
const history = useHistory();    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const loginUser = async (e) =>{
    e.preventDefault();

const res = await  fetch('/login',{
    method:"POST",
    headers:{
        // Accept:"application/json",
        "content-Type":"application/json"
    },
    body:JSON.stringify({
        email,password
    })
})

const data = res.json();

if(res.status === 400 || !data){
    window.alert("Invalid Credentials!")
}else{
    window.alert("login Successfull");
    history.push("/appointment")
}

}



    return (
        <>
            <div className="x">
            <br/>
                <div className="login-form">
                    <form method="POST">
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        Email<span className="fa fa-user"></span>
                                    </span>
                                </div>
                                <input type="text" className="form-control" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" required="required" />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                      Password  <i className="fa fa-lock"></i>
                                    </span>
                                </div>
                                <input type="password" className="form-control" name="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required="required" />
                            </div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary login-btn btn-block" onClick={loginUser} >Log in</button>
                        </div>
                        
                    </form>
                    <p className="text-center text-muted small">Don't have an account? <NavLink to="/register">Sign up here!</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Login



