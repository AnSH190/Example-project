import "./App.css";
import React, {useState, useEffect} from "react";
import Mini from "./Components/Mini/Mini";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";
import user_icon from "./Components/Assets/person.jpg";
import emial_icon from "./Components/Assets/email.jpg";
import password_icon from "./Components/Assets/password.jpg";
import a from "./Components/Assets/1514.jpg";
import b from "./Components/Assets/1515.jpg";
import c from "./Components/Assets/1516.jpg";
import d from "./Components/Assets/1517.jpg";
import e from "./Components/Assets/1518.jpg";
import logo from "./Components/Assets/logo.png";

function App() {
  const [action, setAction] = useState("");
  const [enroll, setEnroll] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  // const Enroll = 1514;
  // const Email = "a@gm";
  // const Pass = 1234;
  // const logs1 = {e: 1514, em: "a@gm", p: 4000};
  // const logs2 = {e: 1515, em: "b@gm", p: 5000};
  // const logs3 = {e: 1516, em: "c@gm", p: 6000};
  // const logs4 = {e: 1517, em: "d@gm", p: 7000};
  // const logs5 = {e: 1518, em: "e@gm", p: 8000};

  const logs1 = {
    e: 2204030101514,
    em: "a@gmail.com",
    p: 4000,
    name: "Ankush Vaswani",
    dob: "04-09-2004",
    mobile: "9012666255",
    h4: "Ankush Mahesh Vaswani",
    fees: "00",
    profile: a,
  };
  const logs2 = {
    e: 2204030101515,
    em: "b@gmail.com",
    p: 5000,
    name: "John Doe",
    dob: "01-01-1995",
    mobile: "1234567890",
    h4: "second Full Name",
    fees: "22500",
    profile: b,
  };
  const logs3 = {
    e: 2204030101516,
    em: "c@gmail.com",
    p: 6000,
    name: "Jane Smith",
    dob: "05-12-2000",
    mobile: "9876543210",
    h4: "Third Full Name",
    fees: "1500",
    profile: c,
  };
  const logs4 = {
    e: 2204030101517,
    em: "d@gmail.com",
    p: 7000,
    name: "David Johnson",
    dob: "09-22-1998",
    mobile: "5558889999",
    h4: "Fourth Full Name",
    fees: "12500",
    profile: d,
  };
  const logs5 = {
    e: 2204030101518,
    em: "e@gmail.com",
    p: 8000,
    name: "Eva Williams",
    dob: "12-05-2002",
    mobile: "7773331111",
    h4: "Fifth Full Name",
    fees: "22500",
    profile: e,
  };

  const [showWarning, setShowWarning] = useState(false);
  const loginData = [logs1, logs2, logs3, logs4, logs5];

  // useEffect(() => {
  //   // Check if the page was reloaded and action is "Sign Up"
  //   const isReloaded =
  //     window.performance && window.performance.navigation.type === 1;
  //   if (isReloaded && action === "Sign Up") {
  //     setShowWarning(true);
  //     setTimeout(() => {
  //       setShowWarning(false);
  //     }, 3000);
  //   }
  // }, [action]);

  useEffect(() => {
    // Check if the page was reloaded and action is "Sign Up"
    const isReloaded =
      window.performance && window.performance.navigation.type === 1;
    if (isReloaded && action === "Sign Up") {
      setShowWarning(true);

      // Set a timeout to hide the warning after 4 seconds
      const hideWarningTimeout = setTimeout(() => {
        setShowWarning(false);
      }, 4000);

      // Set another timeout to reload the page after 4 seconds
      const reloadPageTimeout = setTimeout(() => {
        window.location.reload();
      }, 4000);

      // Clean up the timeouts when the component unmounts
      return () => {
        clearTimeout(hideWarningTimeout);
        clearTimeout(reloadPageTimeout);
      };
    }
  }, [action]);

  const validateLogin = () => {
    // Loop through the login data objects and check if any match the input values
    for (const data of loginData) {
      if (data.e == enroll && data.p == pass && data.em == email) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    // When the user logs in, find and set the selectedUser
    if (action === "Log In" && validateLogin()) {
      const user = loginData.find(
        (data) => data.e == enroll && data.p == pass && data.em == email
      );
      setSelectedUser(user);
    }
  }, [action, enroll, pass, email]);

  return (
    <div className={action === "Log In" ? "n" : "m"}>
      {/* {logs.e == enroll &&
      logs.p == pass &&
      logs.em == email &&
      action === "Log In" ? ( */}

      {action === "Log In" && selectedUser && validateLogin() ? (
        <Mini selectedUser={selectedUser} />
      ) : (
        <div className="container">
          <div className="header">
            {/* <div className="text"> Log In</div>
            <div className="line"></div> */}
            <img src={logo} alt="" />
          </div>
          <div className="inputs">
            {/* {action === "Log In" ? (
              <div></div>
            ) : ( */}
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Enrollment"
                value={enroll}
                onChange={(e) => setEnroll(e.target.value)}
              />
            </div>
            {/* )} */}
            <div className="input">
              <img src={emial_icon} alt="" />
              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(p) => setPass(p.target.value)}
              />
            </div>
          </div>
          {/* {action === "Sign Up" ? (
            <div></div>
          ) : ( */}
          <div className="forgot">
            Forgot Password <span>Click Here</span>
          </div>
          {/* )} */}
          {/* <div>{enroll}</div>
          <div> {email} </div>
          <div> {pass} </div> */}
          {/* {action === "Sign Up" ? <div>Enter Corrct info </div> : <div></div>} */}
          <div className="submit-con">
            {/* <div
              className={action === "Log In" ? "submit gray" : "submit gray"}
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div> */}
            <div
              // className={action === "Sign Up" ? "submit gray" : "submit"}
              className={
                // logs.e == enroll && logs.p == pass && logs.em == email
                validateLogin() ? "submit" : "submit gray"
              }
              // onClick={() => {
              //   setAction("Log In");
              // }}
              onClick={
                // logs.e == enroll && logs.p == pass && logs.em == email
                validateLogin()
                  ? () => {
                      setAction("Log In");
                    }
                  : () => {
                      setAction("Sign Up");
                    }
              }
            >
{Action}
            </div>
          </div>
          {showWarning && (
            <div className={`warning ${showWarning ? "visible" : "hidden"}`}>
              Enter correct information
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
