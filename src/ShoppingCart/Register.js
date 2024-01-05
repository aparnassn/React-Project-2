import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import "./Register.css";
import Card from "react-bootstrap/Card";

function Register() {

  const [firstName,setFirstName]= useState(null)
  const [lastName,setLastName]=useState(null)
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const [confirmPassword,setConfirmPassword]=useState(null)

  function handleClick(){

  }


  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" className="btn" onClick={handleClick}>Register</button>
          </div>
      </div>     
      </div> 
  );
}
export default Register;
