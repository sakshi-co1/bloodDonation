import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import "./style.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import i1 from "../images/1.jpg"
import i2 from "../images/2.jpg"
import i3 from "../images/3.jpg"
import i4 from "../images/4.jpg"
import i5 from "../images/5.jpg"
import i6 from "../images/6.jpg"
import i7 from "../images/7.jpg"
import i8 from "../images/8.jpg"
import i9 from "../images/9.jpg"



class Slider extends Component {
    render() {
        return (
          <s>
            <div>
                <h1>THINGS TO REMEMBER</h1>
                <Carousel fade className="slides">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={i1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Determine if you are eligible</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={i2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Make an appointment.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={i3}
      alt="F"
    />
    <Carousel.Caption>
      <h3>Eat iron-rich foods.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={i4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hydrate yourself.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={i5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Get a good night's rest.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={i7}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Avoid certain activities.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
<div className="text1">
<div className="left">
    
      <ol  style={{color :"white"}} >
      <li><i style={{color: "cyan"}}>Determine if you are eligible.</i> Each country's blood service has different requirements in place to be eligible to donate blood. In general, you will be able to give blood if you meet certain criteria.</li>
      <li><i style={{color: "cyan"}}>
        Make an appointment.</i> There are many blood donation centers across many countries. Since these centers need time to prepare for you to give blood, you should make an appointment.</li>
    <li><i style={{color: "cyan"}}>Eat iron-rich foods. </i>Since blood production requires iron, you should eat iron-rich foods for two weeks before your appointment. This will help you have strong blood for donation and help you better recuperate after your donation.</li>
    <li> <i style={{color: "cyan"}}>Hydrate yourself. </i>To prepare your body for the loss of blood, you need to drink plenty of water or fruit juice the night and morning before you donate. The leading cause of faintness and dizziness when you give blood is a drop in blood pressure or blood sugar. </li>
    <li><i style={{color: "cyan"}}>Get a good night's rest.</i> Before you donate blood, you should have proper sleep. This will help you feel better and more alert when you give blood, which will help reduce the risk of any adverse reactions to the process.</li>
    <li><i style={{color: "cyan"}}>Eat 1-3 hours before your donation. </i>Never give blood if you have not eaten that day. Eating will keep your blood sugar levels stable, which will help you feel better after you have donated blood. Having food in your system helps to ward off lightheadedness and fainting.</li>
   
    <li><i style={{color: "cyan"}}>
      Avoid certain activities. </i>In the hours leading up to your appointment, you need to avoid certain activities that may hurt your chances of donating or contaminate your blood. You should not smoke within the hour leading up to your appointment. You should also avoid alcoholic beverages in the 24 hours before you donate.</li>
   </ol>
    

  </div>
</div>  


{/* <div id="new">
  <br/><br/><br/>
  <br/><br/><br/>
    
  <div id="left"><br/><br/><br/><br/>
    <div>  <h1 className="heading2">Things To Do During and After Donation.</h1></div>
  <p>
    <ol style={{color :"white"}} className="text1">
      
      <li><i style={{color: "cyan"},{fontweight: "bolder"}}>Fill out the forms.</i> When you arrive at your appointment, you will first have to answer many questions about your general health and likely fill out a confidential medical history form.</li>
       <li>Take the physical. Once you pass all the portions of the questionnaire, you will be given a small physical. This typically includes a nurse taking your blood pressure, checking your pulse, and measuring your body temperature.</li>
       <li><i style={{color: "cyan"},{fontweight: "bolder"}}>
        Prepare yourself mentally.</i> Many people who give blood are afraid of needles or don't like to be stuck with one. You can distract or prepare yourself before it happens to make it easier on you. </li>
       <li><i style={{color: "cyan"},{fontweight: "bolder"}}>Have your blood taken.</i> When you finish your physical, the nurse will ask you to lie back in a reclining chair or lie down all the way. A cuff will be placed around your arm to make your veins easier to see and your blood pump faster. The nurse will clean the inside of your elbow, which is where the needle will be placed. The nurse will then place the needle in your arm, which is attached to a long tube. The nurse will ask you to pump your hand a few times and your blood will start coming out.</li>
       <li><i style={{color: "cyan"},{fontweight: "bolder"}}>Relax.</i>Nervousness can also cause your blood pressure to drop and can lead to dizziness. Talk to the person taking your blood if it helps you feel better. Ask them to explain everything that is being done</li>
        <li><i style={{color: "cyan"},{fontweight: "bolder"}}>Rest and replenish. </i>Once you are finished giving blood and the nurse bandages your arm up, you will be asked to sit and wait for about 15 minutes to ensure that you don't faint or feel dizzy. You will also get a snack and some juice to help replenish your fluids and up your blood sugar. The nurse will also suggest that you avoid certain things for the rest of the day and replenish your fluids for the next 48 hours.</li>
      </ol>


  </p>
  // </div>  */}

              
</div>
</s>
        )
    }
}

export default Slider