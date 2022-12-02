import React,{useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import userphoto from "./images/userphoto.png";
import "./Home.css";
import axios from 'axios';

const Home = () => {
  const navigate=useNavigate();
  
  useEffect(()=>{
  if(!localStorage.getItem('token'))
  {
    navigate("/");
  }
},[])

  const logout_user=()=>{
    localStorage.removeItem('token');
    navigate("/");
  }
  return (
    <div className='home'>
       <nav>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li onClick={logout_user} className="logout">Logout</li>
            {/* <li><img src={userphoto}/></li> */}
        </ul>
       </nav>
       <div className="join">
         
         <h3>Welcome to our Website.</h3>
         <NavLink to="/" className="joinnow">Join Now</NavLink>
       </div>
    </div>
  )
}

export default Home;