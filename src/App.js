import React from 'react';
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Forgotpswd from './Forgotpswd';
import LoginPage from './LoginPage';
import Register from "./Register";
import Home from "./Home";
import Otp from './Otp';
import Success from "./Success";
import Linkverify from './Linkverify';

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/Raghav-Authentication/" element={<LoginPage/>}/>
      <Route path="/Raghav-Authentication/about" element={<Forgotpswd/>}/>
      <Route path="/Raghav-Authentication/register" element={<Register/>}/>
      <Route path="/Raghav-Authentication/home" element={<Home/>}/>
      <Route path="/Raghav-Authentication/verify" element={<Otp/>}/>
      <Route path="/Raghav-Authentication/success" element={<Success/>}/>
      <Route path="/Raghav-Authentication/verify_email" element={<Linkverify/>}/>
      <Route path="/Raghav-Authentication/*" element={<LoginPage/>}/>
    </Routes>
    </>
  );
}

export default App;
