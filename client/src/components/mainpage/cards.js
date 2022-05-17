import React, { Component } from 'react'
import './index.css'
// import beforeAfter from "./components/beforafter/beforeAfter";
import third from "../images/3card.jpg"
import two from "../images/2card.png"
import one from "../images/1card.jpg"
import {NavLink} from "react-router-dom"

class cards extends Component {
    render() {
        return (
            <div>
              <br/>
              <br/>
                <div className="main">
                
                <ul className="cards">
                  <li className="cards_item">
                    <div className="card">
                      <div className="card_image"><img src={one} alt="eligible"/></div>
                      <div className="card_content">
                        <h2 className="card_title">Eligibility<br/> Requirement</h2><br/>
                        <p className="card_text">Are you eligible for blood donation? Check the eligibility citeria to donate blood today.</p>
                        <button type="button" className="btn btn-light"> <NavLink className="About" to="/appointment">Read more</NavLink></button>

                      </div>
                    </div>
                  </li>
                  <li className="cards_item">
                    <div className="card">
                      <div className="card_image"><img src={two}/></div>
                      <div className="card_content">
                        <h2 className="card_title">What to Do Before, During and After Your Donation</h2><br/>
                        <p className="card_text">Never Donated Blood Before? Learn about what to do before, during and after blood donation.</p>
                        <button type="button" className="btn btn-light"> <NavLink className="About" to="/toDo">Read more</NavLink></button>

                      </div>
                    </div>
                  </li>
                  <li className="cards_item">
                    <div className="card">
                      <div className="card_image"><img src={third}/></div>
                      <div className="card_content">
                        <h2 className="card_title">What Happens to Donated Blood</h2><br/>
                        <p className="card_text">Have you ever wondered exactly what happens to the blood you donate? Your blood goes on an amazing journey! Learn more about it.</p>
                        <button type="button" className="btn btn-light"> <NavLink className="About" to="/appointment">Read more</NavLink></button>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>  
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

        </div>

        )
    }
}

export default cards
