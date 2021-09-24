import "./forgot.css"

const Forgot = () => {
    return ( 
      <div className="title">
        <div className="forgot-logo">
          <img src="Amazon_Logo.png" alt="Amazon Logo" /> 
        </div>
        <div className="forgot-1">          
        <div className="forgot-first">
          <form className="form-3">
            <h1>Password assistance</h1>
            <h5>Enter the email address or mobile phone number associated with your Amazon account.</h5>
            <label htmlFor="" className="forgot-label">Email or mobile phone number</label>
            <input type="email" className="forgot-input"/>
            <input type="submit" className="submit" value="Continue" />
          </form>
        </div>
        <div className="forgot-second">
          <h4>Has your email address or mobile phone number changed?</h4>
          <h5>If you no longer use the e-mail address associated with your Amazon account, you may contact <a href="">Customer Service</a> for help restoring access to your account
          </h5>
        </div>
        </div>
        <div className="forgot-third">
        <div className="forgot-condition">
          <a href="">Condition Of Use</a>
        </div>
        <div className="forgot-privacy">
          <a href="">Privacy Notice</a>
        </div>
        <div className="forgot-help">
          <a href="">Help</a>    
        </div>
        </div>
        <h5 className="forgot-fourth">© 1996-2021, Amazon.com, Inc. or its affiliates</h5>
      </div>
      
    );
}
 
export default Forgot;