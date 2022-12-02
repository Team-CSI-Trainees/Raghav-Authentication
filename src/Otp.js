import React, { useState } from 'react';
import "./Otp.css";
import Otpimg from "./images/otp.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Otp = () => {
  const navigate=useNavigate();
  const [passsword,setpassword]=useState("");
  const [cpasssword,setcpassword]=useState("");
  // const [registered_not,setregistered_not]=useState(false)

  const password_change=(e)=>{
    setpassword(e.target.value);
  }
  const cpassword_change=(e)=>{
    setcpassword(e.target.value);
  }
  const checkpswd=()=>{
    if(passsword==cpasssword){
    console.log("yes");
    navigate("/");
    }
  }
  return (
    <div className='otp'>
      <div className='otpimg'>
        <img src={Otpimg}/>
      </div>
      <div className='otpfields'>
        <h2>Enter new Passsword</h2>
        <p>Enter the passsword sent on your registered email.</p>
        <div className='password registerfield'>
            <label>Password</label>
            <input type="text" onChange={password_change} value={passsword}/>
        </div>
        {/* <div className='confirm_password registerfield'>
            <label>Confirm Passsword</label>
            <input type="text " onChange={cpassword_change} value={cpasssword}/>
        </div> */}
        {/* <div className={not_registered?'registered_not':"hide"}>This Email is not registered</div> */}
        <NavLink to="" className="verify" onClick={checkpswd}>Verify</NavLink>
        <NavLink to="/" className="loginback">Back to Login</NavLink>
      </div>
    </div>
  )
}

export default Otp