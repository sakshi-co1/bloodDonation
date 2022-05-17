import React, { useState } from 'react'
import './index.css'


function ContactUs() {
    const [user, setUser] = useState({
        name: "", email: "", mobile: "", message: ""
    });
    let name, value;
    const handleInput = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, mobile, message } = user;
        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name, email, mobile, message
            })
        })
        const data = await res.json();
        console.log(data);
        if (data.status === 422 || !data) {
            window.alert("Invalid ")
            console.log("Invalid ")
        } else {
            window.alert("Successfull")
            console.log("Successfull")
            // history.push("/login")
        }
    }
    return (
        <div >
            
                <h1>Contact Us</h1>
            
            <form method="POST">
                <div >
                    <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
                </div>
                <div className="row input-container">
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInput}
                                required />
                            <label>Name</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input type="text"
                                name="email"
                                value={user.email}
                                onChange={handleInput}
                                required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input" style={{ float: 'right' }}>
                            <input type="text"
                                name="mobile"
                                value={user.mobile}
                                onChange={handleInput}
                                required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <textarea
                                name="message"
                                value={user.message}
                                onChange={handleInput}
                                required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="form-group">
                            <button type="button" className="btn btn-primary login-btn btn-block" onClick={PostData} >Submit</button>
                        </div>
                </div>
            </form>
        </div>
    )
}


export default ContactUs
