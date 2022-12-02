import React,{ useState,useEffect } from 'react';
import "./Forgotpswd.css";
import forgetpswd from "./images/forgetpswd.png";
import {NavLink, useNavigate} from "react-router-dom";
import axios from 'axios';



const Forgotpswd = () => {
  useEffect(()=>{
    if(!localStorage.getItem('forget_pswd'))
    {
      navigate("/Raghav-Authentication/");
    }
  },[])
  const [user_email,setuser_email]=useState("");
  const [not_registered,setnot_registered]=useState(true)
  const navigate=useNavigate();
  const email_set=(e)=>{
    setuser_email(e.target.value);
  }
  const send_resetreq=()=>{
    axios.post('https://account-authentication.herokuapp.com/auth/request-reset-email/', {
        email: user_email,
      })
      .then(function (response) {
        console.log(response);
        navigate("/Raghav-Authentication/success");
        localStorage.removeItem('forget_pswd');
      })
      .catch(function (error) {
        console.log(error);
        navigate("/Raghav-Authentication/about");
        setnot_registered(false);
      });
  }
  const return_login=()=>{
    localStorage.removeItem('forget_pswd');
  }
  return (
    <div className='forgetpswd'>
        <div className='forgetpswdimg'>
          <img src={forgetpswd}/>
        </div>
        <div className='forgetdiv'>
           <div>
             <h2>Reset your password</h2>
             <p>The verification mail will be sent to the mailbox.<br/>Please check it.</p>
             <div className='email-reset'>
             <h1 className={not_registered?"hide":"registered_not"}>This Email is not registered</h1>
              <label>Email</label>
              <input type="email" placeholder="Email" name='email' value={user_email} onChange={email_set}/>
             </div>
             <div>
             <input type="submit" className='registers send' value="Send" onClick={send_resetreq}/>
                </div>
              <NavLink to="/Raghav-Authentication/" className="loginback" onClick={return_login}>Back to Login</NavLink>
           </div>
        </div>
    </div>
  )
}

export default Forgotpswd; 