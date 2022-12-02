import React,{ useState,useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import loginimg from "./images/loginimg.png";
import nameimg from "./images/nameimg.png";
import pswdimg from "./images/pswdimg.png";
import eye from "./images/eye.png";
import hidden from "./images/hidden.png";
import captcha from "./images/captcha.png";
// import Forgotpswd from "./Forgotpswd";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const LoginPage = () => {


  const navigate=useNavigate();

  const initialvalues = {
    roll_no: "",
    password: "",
  };



  const [formvalues, setformvalues] = useState(initialvalues);
  const [display_error,setdisplay_error]=useState(false);
  const[verified,setverified]=useState(false);

  const [show_pswd,setshow_pswd]=useState(false);
  const userHandler = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });   
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setverified(true);
  }

  const show_password=()=>{
    setshow_pswd(true);
  }
  const hide_password=()=>{
    setshow_pswd(false);
  }

  const login_complete=()=>{
    axios.post('https://account-authentication.herokuapp.com/auth/login/', {
        roll_no: formvalues.roll_no,
        password: formvalues.password,
      })
      .then(function (response) {
        console.log(response.data.tokens);
        navigate("/home");
        localStorage.setItem('token',response.data.tokens)
      })
      .catch(function (error) {
        console.log(error);
        setdisplay_error(true)
      });
  }

  const register_now =()=>{
    localStorage.setItem('register',"active")
  }
  const pswd_handler=()=>{
    localStorage.setItem('forget_pswd',"active")
  }


  return (
    
    <div>
        
        <div className="login">
            <div className="loginimg">
               <img src={loginimg}/>
            </div>
            <div className="logininp">
              <h1>Login</h1>
              <div className={display_error?'error_display':"hide"}>Invalid Username or Password</div>
              <div className='inputfields'>
                <div className='inputimg'><img src={nameimg}/></div>
                <input type="text" name="roll_no" placeholder='Username' value={formvalues.roll_no} onChange={userHandler}/>
              </div>
              <div className='inputfields input_pswd'>
                <div className='inputimg'><img src={pswdimg}/></div>
                <input type={show_pswd?"text":"password"} name="password" value={formvalues.password}placeholder="Password" onChange={userHandler}/>
                <div className={show_pswd?'hide':"show_hide"} onClick={show_password}><img src={eye}/></div>
                <div className={show_pswd?'show_hide':"hide"} onClick={hide_password}><img src={hidden}/></div>
              </div>
              <NavLink to="/about" className="pswd-reset" onClick={pswd_handler}>Forget Password?</NavLink>
              <div className="checkbox">
                <div>
                <ReCAPTCHA className='captcha'
                   sitekey="6Lfz404jAAAAAH2wqkCJSE0mhWnb2luA57ctRVpU"
                   onChange={onChange}
                />
                  {/* <input type="checkbox"/>
                  <label>I'm not a robot</label>
                  <img src={captcha}/> */}
                </div>
                {/* <div className='remember'>
                  <input type="checkbox"/>
                  <label>Remember Me</label>
                </div> */}
              </div>
              <div>
              {/* <NavLink to="/home" className="submit">Sign In</NavLink> */}
              <input type="submit" className='registers' onClick={login_complete} value="Sign In"/>
              </div>
              <div className='register'>
                <p>Don't have an account?</p>
                <NavLink to="/register" className="registerbtn" onClick={register_now}>Register</NavLink>
              </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default LoginPage