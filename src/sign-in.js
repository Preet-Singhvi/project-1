
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import './sign-in.css';
import { useState } from "react";

const Sign_in = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World")
  }
  const [data,setData] = useState("")
  return (    
    <div className="title">
      <div className="first">
          <img src="Amazon_Logo.png" alt="Amazon Logo" /> 
      </div>
      <div className="sign">        
      <div className="sign-in">
        <form className="form-1"  action="/password">
          <h1>Sign-In</h1>
          <label>Email </label><br />
          <input className="email" type="email" name="email" required/><br />
          <button className="sub" type="submit" >Continue</button>
          <p className="para">By continuing, you agree to Amazon's <a href="">Conditions Of Use</a> and <a href="">Privacy Notice.</a></p>
          <a href="">
            <i className="icon"></i>
            <span className="help">Need Help?</span>
          </a>
        </form>
      </div>
      <div className="second">
        <h4>New To Amazon?</h4>  
        <Link to="/sign-up" className="app-link">Create Your Amazon Account</Link>
      </div>
      </div>
      <div className="app-third">
        <div className="app-condition">
          <a href="">Condition Of Use</a>
        </div>
        <div className="app-privacy">
          <a href="">Privacy Notice</a>
        </div>
        <div className="app-help">
          <a href="">Help</a>    
        </div>
      </div>
        <h5 className="app-fourth">© 1996-2021, Amazon.com, Inc. or its affiliates</h5>
    </div>    
  );
}
 
export default Sign_in;