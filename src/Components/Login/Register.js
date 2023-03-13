import React, { useState} from "react";
import Axios from 'axios';
import './Register.css';
import './Validation';
import Validation from "./Validation";


export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const [user_name, setFullName] = useState("");
  const [user_email, setEmailAddress] = useState("");
  const [user_password, setPassword] = useState(""); 

  const [errors, setErrors] = useState({});



  const register = () => {
    Axios.post("http://localhost:3001/register", {
      user_name: user_name, 
      user_email: user_email, 
      user_password: user_password, 
    }).then((response) => {
        console.log("Successfully Registered");
      });
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>

            <div className="text-center">
              Not Registered Yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>

            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter Email"
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter Password"
              />
            </div>
            
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </div>

            <p className="text-center mt-2">
               <a href="#">Forgot Password?</a>
            </p>

          </div>
        </form>
      </div>
    )
  }

    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>

            <div className="text-center">
              Already Registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>

            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              {errors.user_name && <p style={{color:"red"}}> {errors.user_name}</p>}
            </div>

            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}  
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-outline-primary" onClick={register}>
                Register
              </button>
            </div>
            <p className="text-center mt-2">
              <a href="#">Forgot password?</a>
            </p>
          </div>
          
        </form>
      </div>
    )
}
