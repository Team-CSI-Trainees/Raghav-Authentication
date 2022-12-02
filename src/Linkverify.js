import React from 'react';
import "./Linkverify.css";
import { NavLink } from 'react-router-dom';
import successimg from "./images/success.png";

const Linkverify = () => {
  return (
    <div className='success'>
        <div>
            <img src={successimg}/>
            <p>A verification link sent on your email.<br/>The link will be active for 10 minutes.</p>
            <NavLink to="/Raghav-Authentication/" className="successback">Back To Login</NavLink>
        </div>
    </div>
  )
}

export default Linkverify;