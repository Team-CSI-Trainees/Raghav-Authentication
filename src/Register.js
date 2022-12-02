import React, { useState,useEffect } from 'react';
import registerimg from "./images/registerimg.png";
import "./Register.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Register = () => {

  useEffect(()=>{
    if(!localStorage.getItem('register'))
    {
      navigate("/Raghav-Authentication/");
    }
  },[])
  

  const initialvalues = {
    full_name: "",
    roll_no: "",
    year: "",
    branch: "",
    mobile_number: "",
    email: "",
    password: "",
    password2: "",
    gender: ""
  };



  const [formvalues, setformvalues] = useState(initialvalues);
  const [error, seterror] = useState(true);
  const [formerror, setformerror] = useState({});
  const[verified,setverified]=useState(false);
  const navigate=useNavigate();
  const userHandler = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });   
  }

   const errors_form=()=> {
    const errors = {};
    const cusername = /^[a-zA-Z ]{3,20}$/;
    const cphone = /^[7-9]([0-9]){9}$/;
    const cemail = /^([a-zA-Z0-9._-]+)([@]{1}[a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,8})?$/;
    const cpassword = /^([a-zA-Z0-9_@#$&]){5,20}$/;


    if (cusername.test(formvalues.full_name)) {
      errors.full_name = "";
      seterror(true);
      console.log(error.name)

    }
    else {
      seterror(false);
      errors.full_name = "Invalid full_name";
    }



    if (formvalues.roll_no.length != 5) {
      seterror(false);
      errors.roll_no = "Invalid Roll no.";
    }
    else {
      errors.roll_no = "";
    }



    if (formvalues.year == "") {
      seterror(false);
      errors.year = "Please select a year";
    }
    else {
      errors.year = "";
    }



    if (formvalues.branch == "") {
      seterror(false);
      errors.branch = "Please select a branch";
    }
    else {
      errors.branch = "";
    }




    if (!cphone.test(formvalues.mobile_number)) {
      seterror(false);
      errors.mobile_number = "Invalid mobile number";
    }
    else {
      errors.mobile_number = "";
    }



    if (!cemail.test(formvalues.email)) {
      seterror(false);
      errors.email = "Invalid email";
    }
    else {
      errors.email = "";
    }



    if (!cpassword.test(formvalues.password)) {
      seterror(false);
      errors.password = "Weak password";
    }
    else {
      errors.password = "";
    }




    if (formvalues.password != formvalues.password2) {
      seterror(false);
      errors.password2 = "Password not matched";
    }
    else {
      errors.password2 = "";
    }




    if (formvalues.gender == "") {
      seterror(false);
      errors.gender = "Select gender";
    }
    else {
      errors.gender = "";
    }



    return errors;
  }

  const validateform = (e) => {
    e.preventDefault();
    setformerror(errors_form());
    if (error === true && verified==true) 
    { 
      console.log(formvalues);
      axios.post('https://account-authentication.herokuapp.com/auth/register/', {
        full_name: formvalues.full_name,
        roll_no: formvalues.roll_no,
        year: formvalues.year,
        branch: formvalues.branch,
        mobile_number: formvalues.mobile_number,
        email: formvalues.email,
        password: formvalues.password,
        password2: formvalues.password2,
        gender:  formvalues.gender,
      })
      .then(function (response) {
        console.log(response);
        navigate("/Raghav-Authentication/verify_email")
        localStorage.removeItem('register');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else {
      console.log("error");
      
    }
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setverified(true);
  }
  const remove_register=()=>{
    localStorage.removeItem('register');
  }

  return (
    <div className='registerpage'>
      <div className='registerimg'>
        <img src={registerimg} />
      </div>
      <div className="signup">
        <h2>Registration</h2>
 
        <form onSubmit={validateform}>

          <div className="signinputs">
            <div className="full_name registerfield">
              <label>Full Name</label>
              <input type="text" placeholder="Please enter your name" name="full_name" value={formvalues.full_name} onChange={userHandler} />
              <p className='throwerror'>{formerror.full_name}</p>
            </div>

            <div className="rollno registerfield">
              <label>Roll No.</label>
              <input type="text" placeholder="Please enter your Roll no" name="roll_no" value={formvalues.roll_no} onChange={userHandler} />
              <p className='throwerror'>{formerror.roll_no}</p>
            </div>

            <div className="year registerfield">
              <label>Year</label>
              <select name="year" value={formvalues.year} onChange={userHandler}>
                <option  className="disable" selected value="" disabled>--Please select--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <p className='throwerror'>{formerror.year}</p>
            </div>

            <div className="branch registerfield">
              <label>Branch</label>
              <select name="branch" value={formvalues.branch} onChange={userHandler}>
                <option selected value="" disabled>--Please select--</option>
                <option value="CSE">CSE</option>
                <option value="CSE(AI-ML)">CSE(AI-ML)</option>
                <option value="CSE(DS)">CSE(DS)</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="MECHANICAL">MECHANICAL</option>
                <option value="CIVIL">CIVIL</option>
              </select>
              <p className='throwerror'>{formerror.branch}</p>
            </div>


            <div className="email registerfield">
              <label>Email</label>
              <input type="email" name="email" placeholder="Please enter your email" value={formvalues.email} onChange={userHandler} />
              <p className='throwerror'>{formerror.email}</p>
            </div>

            <div className="number registerfield">
              <label>Mobile Number</label>
              <input type="text" name="mobile_number" placeholder="Please enter your mobile no" value={formvalues.mobile_number} onChange={userHandler} />
              <p className='throwerror'>{formerror.mobile_number}</p>
            </div>

            <div className="passsword registerfield">
              <label>Password</label>
              <input type="password" name="password" placeholder="Please enter your password" onChange={userHandler} value={formvalues.password} />
              <p className='throwerror'>{formerror.password}</p>
            </div>

            <div className="confirmpassword registerfield">
              <label>Confirm Password</label>
              <input type="password" name="password2" placeholder="Re-enter the same password" onChange={userHandler} value={formvalues.password2} />
              <p className='throwerror'>{formerror.password2}</p>
            </div>
          </div>


          <div className="gender registerfield">
            <label className='gender-label'>Gender</label>
            <div className='genderinp' name="gender" value={formvalues.gender} onChange={userHandler}>
              <div className='click_gender'>
                <input type="radio" name="gender" value="Male" />
                <label>Male</label>
              </div>

              <div className='click_gender'>
                <input type="radio" name="gender" value="Female" />
                <label>Female</label>
              </div>

              <div className='click_gender'>
                <input type="radio" name="gender" value="Other" />
                <label>Other</label>
              </div>

              <div className='click_gender'>
                <input type="radio" name="gender" value="Prefer  not to say" />
                <label>Prefer not to say</label>
              </div>

            </div>
            <p className='throwerror'>{formerror.gender}</p>
          </div>

          <div className="checkbox">
            <div className='captcha recaptcha'>
            <ReCAPTCHA
               sitekey="6Lfz404jAAAAAH2wqkCJSE0mhWnb2luA57ctRVpU"
               onChange={onChange}
            />
              {/* <input type="checkbox" />
              <label>I'm not a robot</label>
              <img src={captcha} /> */}
            </div>
            {/* <div className='remember'>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div> */}
          </div>
          


          <div>
            {/* <input type="submit" value={verified?"Register":""} /> */}
            <input type="submit" className='registers' value="Register"/>
            {/* <NavLink to="/" type="submit" className="registerbtn">Register</NavLink> */}
          </div>

          <div className='not-account'>
            <p>Already have an account?</p>
            <NavLink to="/Raghav-Authentication/" className="registerbtn" onClick={remove_register}>Log In</NavLink>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Register