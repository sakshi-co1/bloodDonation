import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './loginSign.css'
function Booking() {
    const history = useHistory();
    const[user,setUser] = useState({
       name:"", email:"",date:"",bloodgrp:"",age:""});
    
    let name ,value;   
    const handleInput =  (e)=>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const PostData = async(e)=>{
        e.preventDefault();
        const {name, email,date,bloodgrp,age} = user;
        const res = await fetch("/booking",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body : JSON.stringify({
                name, email, date, bloodgrp,age
            })
        })
        const data= await res.json();
        console.log(data);
        if(data.status === 422 || !data){
            window.alert("Invalid ")
            console.log("Invalid ")
        }else{
            window.alert(" Successfull")
            console.log(" Successfull")
            history.push("/appointment")
        }
    }

    return (
        <>
        <div className="x">
            <div className="signup-form">
                <form  method="POST" />
                <h2>Appointment</h2>
                <p>Please fill in this form to book an appointment</p>
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
                                Date<i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="date" className="form-control" name="date" 
                        value={user.date}
                        onChange ={handleInput} 
                         placeholder="DD-MM-YYYY" required="required" />
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            Blood Group<i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="bloodgrp" 
                        value={user.bloodgrp}
                        onChange ={handleInput} 
                         placeholder="blood group" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            Age<i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="age" 
                        value={user.age}
                        onChange ={handleInput} 
                         placeholder="Your Age" required="required" />
                    </div>
                </div>
               
                
                <div className="form-group">
                    <button type="submit" name="register" id="register" onClick={PostData}
                    className="btn btn-primary btn-lg">Done</button>
                </div>

                {/* <div className="text-center">Already have an account? <a href="/login">Login</a></div> */}

            </div>
         </div>

        </>
    )
}

export default Booking;