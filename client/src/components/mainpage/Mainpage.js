import React, { Component } from 'react'
import "./index.css"
import Navbar from "./Navbar"
import About from "./About"
import ContactUs from "./ContactUs"
import Counts from "./counts"
import Cards from "./cards"
import { NavLink } from 'react-router-dom'

class mainpage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <button type="button" className="btn btn-light"> <NavLink className="About" to="/appointment">Book Appointment</NavLink></button>
                <header className='mainpage'>
                    <div className="mainheader">
                    </div>
                </header>
                <Cards/>
                <Counts/>
                <ContactUs/>
            </div>
        )
    }
}

export default mainpage
