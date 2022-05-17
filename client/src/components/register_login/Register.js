import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './loginSign.css'
function Signup() {
    const history = useHistory();
    const[user,setUser] = useState({
       name:"", email:"",mobile:"",city:"",state:"",password:"",cpassword:"" });
    
    let name ,value;   
    const handleInput =  (e)=>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const PostData = async(e)=>{
        e.preventDefault();
        const {name, email,mobile,city,state,password,cpassword} = user;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body : JSON.stringify({
                name, email, mobile, city, state,password,cpassword
            })
        })
        const data= await res.json();
        console.log(data);
        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }else{
            window.alert(" Registration Successfull")
            console.log("Registration Successfull")
            history.push("/login")
        }
    }

    return (
        <>
        <div className="x">
            <div className="signup-form">
                <form  method="POST" />
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Username <span className="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="name" 
                        value={user.name}
                        onChange ={handleInput} 
                         placeholder="Username" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Email Address<i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" className="form-control" name="email" 
                        value={user.email}
                        onChange ={handleInput} 
                         placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            Phone <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <input type="number" className="form-control" name="mobile" 
                        value={user.mobile}
                        onChange ={handleInput} 
                         placeholder="Phone Number" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            City<i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="city" 
                        value={user.city}
                        onChange ={handleInput} 
                         placeholder="Your City" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            State<i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="state" 
                        value={user.state}
                        onChange ={handleInput} 
                         placeholder="Your City" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            Password <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="password" 
                        value={user.password}
                        onChange ={handleInput} 
                         placeholder="Password" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            cpassword <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="cpassword" 
                        value={user.cpassword}
                        onChange ={handleInput} 
                         placeholder="Confirm Password" required="required" />
                    </div>
                </div>
                
                <div className="form-group">
                    <button type="submit" name="register" id="register" onClick={PostData}
                    className="btn btn-primary btn-lg">Sign Up</button>
                </div>

                <div className="text-center">Already have an account? <a href="/login">Login</a></div>

            </div>
         </div>

        </>
    )
}

export default Signup