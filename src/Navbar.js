import react from "react";
import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
    return (  
        <div className="title">
          <div className="logo">
            <img src="Amazon_Logo.png" alt="Amazon Logo" /> 
          </div>
          <div className="create-form">
          <div className="sign-up">
            <form className="form">
              <h3>Create Account</h3>
              <label className="name-label">Your Name</label>
              <br />
              <input className="name-input" name="name" type="text" required/>
              <label className="number-label">Mobile Number</label>
              <br />
              <div className="numbers">
              <select name="countryCode" id="code" className="number-select" >
                 <option data-calling-code="91" data-country-code="IN" value="IN" data-a-html-content="India +91" selected>
                 IN +91</option>
              </select>
              <input className="number-input" type="tel" placeholder="  Mobile Number" name="number" required/>
              </div>
              <label className="email-label">Email(Optional)</label>
              <br />
              <input className="email-input" type="email" name="email" required/>
              <label className="password-label">Password</label>
              <br />
              <input className="password-input" type="password" name="password" required/>
              <br />
              <div className="image">
                <img src="info_i.png" alt="" />
                <h6>Passwords must be at least 6 characters.</h6>
              </div>
              <div className="info">
                <h5>We will send you a text to verify your phone.</h5>
                <h5 className="message">Message and Data rates may apply.</h5>
              </div>
              <input className="submit" type="submit" value="Continue" />
            </form>
            <div className="account">
              <h5>Already have an account?</h5>
              <a className="sign-in" href="/">Sign in</a>
            </div>              
            <div className="business">
              <h5>Buying for work?</h5>
              <a className="business-account" href="">Create a free business account</a>
            </div>
          </div>
          </div>
          <div className="third">
        <div className="condition">
          <a href="">Condition Of Use</a></div>
        <div className="privacy">
          <a href="">Privacy Notice</a></div>
        <div className="help">
          <a href="">Help</a>    
        </div>
      </div>
        <h5 className="fourth">© 1996-2021, Amazon.com, Inc. or its affiliates</h5>
        </div>    
    );
  }
 
export default Navbar;