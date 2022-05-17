import React, { Component } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <div>
                
            <div className="mainheader">
            <nav className="navbar  bg-dark">
                    <NavLink className="home" to="/">🏠</NavLink>
                    <NavLink className="Care" to="/toDo">Care</NavLink>
                    <NavLink className="Contact" to="/contact">Contact </NavLink>
                    <NavLink className="About" to="/about">About</NavLink>
                        
                        <button type="button" className="btn btn-light"> <NavLink className="About" to="/register">Register</NavLink></button>
                        <button type="button" className="btn btn-light"> <NavLink className="About" to="/login">Login</NavLink></button>
                        <button type="button" className="btn btn-light"> <NavLink className="About" to="/logout">Logout</NavLink></button>
                        
                        </nav>
                        

            </div>
              
            </div>
        )
    }
}

export default Navbar