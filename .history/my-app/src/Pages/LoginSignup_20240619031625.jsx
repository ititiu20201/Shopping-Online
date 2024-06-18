import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const login = async () => {
    console.log("Login Function Executed");
  };

  const signup = async () => {
    console.log("Sign up Function Executed");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign up" ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button
          onClick={() => {
            state === "Login" ? Login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign up" ? (
          <p className="loginsignup-login">
            Already have a account?{" "}
            <span
              onClick={() => {
                setState("Log in");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue. I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
