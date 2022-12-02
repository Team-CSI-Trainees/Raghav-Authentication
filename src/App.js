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
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/about" element={<Forgotpswd/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/verify" element={<Otp/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/verify_email" element={<Linkverify/>}/>
      <Route path="/*" element={<LoginPage/>}/>
    </Routes>
    </>
  );
}

export default App;
