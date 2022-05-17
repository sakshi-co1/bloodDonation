import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
import Mainpage from "./components/mainpage/Mainpage"
import Navbar from "./components/mainpage/Navbar"
import Counts from "./components/mainpage/counts"
import Cards from "./components/mainpage/cards"
import Login from "./components/register_login/login"
import Register from "./components/register_login/Register"
import Logout from "./components/register_login/Logout"
 import Del from "./components/register_login/Del";
import './App.css';
import ContactUs from "./components/mainpage/ContactUs";
import Appointment from "./components/register_login/Appointment";
import Slider from "./components/others/Sliders";
import Quiz from "./components/others/quiz";
import Booking from "./components/register_login/Booking";

function App() {
  return (
   <Router>
     <div className="app">
       <Switch>
       <Route exact path="/">
            <Mainpage/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/about">
            <Navbar/>
            <Cards/>
            <Counts/>
          </Route>
          <Route exact path="/contact">
          <Navbar/>
            <ContactUs/>
          </Route>
          <Route exact path="/appointment">
          {/* <Navbar/> */}
            <Appointment/>
            
          </Route>
          <Route exact path="/delete">
          <Del/>
          </Route>
          <Route exact path="/toDo">
          <Slider/>
          </Route>
          <Route exact path="/logout">
          <Logout/>
          </Route>
          <Route exact path="/test">
          <Quiz/>
          </Route>
          <Route exact path="/booking">
          <Booking/>
          </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
