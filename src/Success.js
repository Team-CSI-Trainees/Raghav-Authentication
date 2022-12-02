import React from 'react';
import "./Success.css";
import { NavLink } from 'react-router-dom';
import successimg from "./images/success.png";

const Success = () => {
  return (
    <div className='success'>
        <div>
            <img src={successimg}/>
            <p>Password sent to your registered Email.</p>
            <NavLink to="/" className="successback">Login Now</NavLink>
        </div>
    </div>
  )
}

export default Success