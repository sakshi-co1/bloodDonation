import axios from "axios"
// import { async, map } from "rxjs"; 
import React, { useState, useEffect } from 'react'
// import ReactTable from "react-table";
import Table from 'react-bootstrap/Table'
import "./appointment.css"
import { useHistory, NavLink } from "react-router-dom"
import Navbar from "../mainpage/Navbar"
// import Logout from './Logout'
const Appointment = () => {
    var data;
    const history = useHistory()
    const [userData, setuserdata] = useState([])

    const callAbout = async () => {
        //    var data;
        try {
            await axios.get("/booking").then(
                (res) => {
                    data = res.data;
                    console.log(res);
                    console.log(data);
                    setuserdata(data);
                }
            )

        }
        catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        callAbout()
    }, []);
    console.log(userData);



    return (
        <div>
            <div className="mainheader">
                <nav className="navbar  bg-dark">
                    <NavLink className="home" to="/">🏠</NavLink>
                    <NavLink className="Care" to="/toDo">Care</NavLink>
                    <NavLink className="Contact" to="/contact">Contact </NavLink>
                    <NavLink className="About" to="/about">About</NavLink>

                    <button type="button" className="btn btn-light"> <NavLink className="About" to="/logout">Logout</NavLink></button>

                </nav>
            </div>
            <br/>
            <br/>
            <div className="mainheader">
            <button type="button" className="btn btn-light"> <NavLink className="About" to="/test">Book Appointment</NavLink></button>
                {/* <button><NavLink to="/test">Book Appointment</NavLink></button></div> */}
                </div> 
                <br/>
                <br/>
            <form method='GET'>
            <h3 > Appointment History</h3>
                <Table striped bordered hover size="sm">
                    
                    <thead>
                        
                        <tr>
                            <th>#</th>
                            <th> name</th>
                            <th>Date</th>
                            <th> Age</th>
                            <th>bloodgrp</th>
                            <th>Fit for donation</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData ? (userData.map((value, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>

                                <td>{value.name}</td>
                                <td>{value.date}</td>
                                <td>{value.age}</td>
                                <td>{value.bloodgrp}</td>
                                <td>YES</td>
                                <td><button type="button"><a href="/delete/">Cancel</a></button></td>
                            </tr>
                        )) : "No Data Yet"}




                    </tbody>
                </Table>
            </form>
        </div>
    );
}

export default Appointment;

