import React, { Component } from 'react'
import './index.css'
import axios from "axios"
import { useState } from 'react'



const Count= () => {
  var data;
  // const history = useHistory()
const [userData, setuserdata] = useState({
  
  bloodgrp:''
  
})

const callAbout = async () =>{
  //    var data;
  try{
      axios.get("/").then(
          (res)=>{
            data = res.data;
            console.log(res);
            console.log(data);
            // setuserdata(data);
          }
            )
                                                                                     
     }
     catch(err){
         console.log(err) 
           }
}
    
        return (
            <div>
                <h2 className="head2">Total Blood Donor Register With Blood Bank Today</h2>
        <div className="blocks">
          
          <div className="row">
            <div className="column">
              <h2>A-</h2>
              <p>2</p>
            </div>
            &emsp;
            <div className="column">
              <h2>A+</h2>
              <p>1</p>
            </div>
            &emsp;
            <div className="column" >
              <h2>AB-</h2>
              <p>0</p>
            </div>
            &emsp;
            <div className="column" >
              <h2>AB+</h2>
              <p>0</p>
            </div>
          </div>
          <div className="row">
            <div className="column1" >
              <h2>B-</h2>
              <p>0</p>
            </div>
            &emsp;
            <div className="column1" >
              <h2>B+</h2>
              <p>0</p>
            </div>
            &emsp;
            <div className="column1" >
              <h2>O-</h2>
              <p>0</p>
            </div>
            &emsp;
            <div className="column1">
              <h2>O+</h2>
              <p>0</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        </div>


        )
    
}

export default Count;
