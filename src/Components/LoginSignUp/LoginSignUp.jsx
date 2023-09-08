import React, {useState} from "react";
import "./LoginSignUp.css";
import user_icon from "../Assets/person.jpg";
import emial_icon from "../Assets/email.jpg";
import password_icon from "../Assets/password.jpg";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action} </div>
        <div className="line"></div>
      </div>
      <div className="inputs">
        {action === "Log In" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={emial_icon} alt="" />
          <input type="email" placeholder="E-Mail" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot">
          Forgot Password <span>Click Here</span>
        </div>
      )}
      <div className="submit-con">
        <div
          className={action === "Log In" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Log In");
          }}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
