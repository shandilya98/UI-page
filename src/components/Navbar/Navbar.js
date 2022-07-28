import React from "react";
import logo from "../../Images/logo.svg";
import "./navbar.css";

export default function Navbar() {
  const buttonHandler = (e)=>{
    e.preventDefault();
    console.log('You clicked the button.');
  }
  return (
    <div>
      <div className="container">
      <div className="logo-details-wrapper">
      <div className="logo-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="Details">
        <button   onCLick={buttonHandler} className="btnclass"> Awards</button>
        <button  onCLick={buttonHandler}  className="btnclass"> Our work</button>
        <button  onClick={()=>{alert("Contact us")}} className="contact-btn"> Contact Us</button>
      </div>
      </div>
      </div>
    </div>
  );
}
