import "./password.css"

const Password = () => {
    return ( 
        <div className="password-title">
          <div className="password-logo">
            <img src="Amazon_Logo.png" alt="Amazon Logo" /> 
          </div>
          <div className="password">
          <div className="password-first">
            <form className="form-2" >
              <h1>Sign-In</h1>
              <div className="sign-in-input">
                <h5 className="sign-in-data">singhvipreet1995@gmail.com</h5>
                <a href="/"><h5 className="sign-in-h5">Change</h5></a>
              </div>
              <div className="password-data">
                <label htmlFor="" className="password-label">Password</label>
                <a href="/forgot-password" className="forgot">Forgot Password</a>
              </div>
              <input type="password" className="password-input" />
              <input type="submit" className="password-submit" value="Sign-In" />
              <div className="password-second">
                <input type="checkbox" className="password-checkbox" />
                <h5>Keep me signed in.</h5>
                <a href="" >Details</a>
              </div>
            </form>      
          </div>
          </div>
          <div className="password-third">
            <div className="password-condition">
              <a href="">Condition Of Use</a>
            </div>
            <div className="password-privacy">
              <a href="">Privacy Notice</a>
            </div>
            <div className="password-help">
              <a href="">Help</a>    
            </div>
          </div>
          <h5 className="password-fourth">© 1996-2021, Amazon.com, Inc. or its affiliates</h5>
        </div>
     );
}
 
export default Password;
