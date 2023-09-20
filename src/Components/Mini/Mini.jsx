import React, {useState, useEffect} from "react";
import "./Mini.css";
import user from "../Assets/person.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faCalendar,
  faEnvelope,
  faBook,
  faMale,
  faUniversity,
  faArrowUpRightFromSquare,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const Mini = ({selectedUser, results}) => {
  const [action, setAction] = useState("My Profile");
  const [greeting, setGreeting] = useState("");

  const handleLogInClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    // Get the current hour
    const currentHour = new Date().getHours();

    // Define greeting messages based on time of day
    let newGreeting = "";
    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      newGreeting = "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 20) {
      newGreeting = "Good Evening";
    } else {
      newGreeting = "Good Night";
    }

    // Set the greeting message
    setGreeting(`HI ${selectedUser.name}, ${newGreeting}!`);
  }, [selectedUser]);

  const [examSections, setExamSections] = useState({
    schedule: false,
    results: false,
    resources: false,
    registration: false,
  });

  // Function to toggle the visibility of a specific exam section
  // const toggleExamSection = (section) => {
  //   setExamSections((prevState) => ({
  //     ...prevState,
  //     [section]: !prevState[section],
  //   }));
  // };

  const toggleExamSection = (section) => {
    setExamSections((prevState) => ({
      schedule: section === "schedule" ? !prevState.schedule : false,
      results: section === "results" ? !prevState.results : false,
      resources: section === "resources" ? !prevState.resources : false,
      registration:
        section === "registration" ? !prevState.registration : false,
    }));
  };
  // const [results, setResults] = useState([
  //   {subject: "Mathematics", score: 95},
  //   {subject: ".NET", score: 88},
  //   {subject: "Data Structures", score: 85},
  //   {subject: "Operating Systems", score: 75},
  //   {subject: "Digital Electronics of Technology", score: 80},
  //   {subject: "PHP", score: 10},
  //   {subject: "Indian Constitution", score: 90},
  // ]);

  return (
    <div className="main">
      <div className="cont">
        <div className="profile">
          <div className="p">
            <img src={selectedUser.profile} alt="Profile" className="pfp" />
            {/* <p id="name"> Ankush vaswani </p> */}
            <p
              id="name"
              onClick={() => {
                setAction("My Profile");
              }}
            >
              {" "}
              {selectedUser.name}{" "}
            </p>
          </div>
          <button
            className="log"
            // onClick={() => {
            //   setAction("Sign Up");
            // }}
            onClick={handleLogInClick}
          >
            Log In
          </button>
        </div>
        <div className="greetting">
          {/* <img src={user} alt="" className='pfp' /> */}
          {/* <h3>HI Ankush Vaswani, Good Morning!</h3> */}
          {/* <h3>HI {selectedUser.name}, Good Morning!</h3> */}
          <h3>{greeting} </h3>
        </div>
        <div className="menu-cont">
          <div
            className={
              action === "My Profile" ? "menu-items black" : "menu-items"
            }
          >
            <button
              onClick={() => {
                setAction("My Profile");
              }}
            >
              {" "}
              My Profile
            </button>
          </div>
          <div
            className={
              action === "Payments" ? "menu-items black" : "menu-items"
            }
          >
            <button
              onClick={() => {
                setAction("Payments");
              }}
            >
              Payments
            </button>
          </div>
          <div
            className={action === "Exams" ? "menu-items black" : "menu-items"}
          >
            <button
              onClick={() => {
                setAction("Exams");
              }}
            >
              Exams
            </button>
          </div>
          <div
            className={action === "Results" ? "menu-items black" : "menu-items"}
          >
            <button
              onClick={() => {
                setAction("Results");
              }}
            >
              {" "}
              Results
            </button>
          </div>
          <div
            className={
              action === "Academics" ? "menu-items black" : "menu-items"
            }
          >
            <button
              onClick={() => {
                setAction("Academics");
              }}
            >
              {" "}
              Academics
            </button>
          </div>
          <div
            className={action === "Events" ? "menu-items black" : "menu-items"}
          >
            <button
              onClick={() => {
                setAction("Events");
              }}
            >
              Events
            </button>
          </div>
          <div
            className={
              action === "Faculty Details" ? "menu-items black" : "menu-items"
            }
          >
            <button
              onClick={() => {
                setAction("Faculty Details");
              }}
            >
              {" "}
              Faculty Details
            </button>
          </div>
        </div>
        {action === "My Profile" ? (
          <div className="profile-sec">
            <div className="profile-details">
              <img src={selectedUser.profile} alt="" />
              {/* <h2>Name:- Ankush Vaswani </h2> */}
              <h2>Name:- {selectedUser.name} </h2>
              <h3>Current Semester - 3 </h3>
              {/* <h3>2204030101514</h3> */}
              <h3>{selectedUser.e} </h3>
            </div>
            <div className="profile-h">
              <div className="h-">
                <img src={user} alt="" />
                <h4>{selectedUser.h4}</h4>
                {/* <h4>Ankush Mahesh Vaswani</h4> */}
              </div>
              <div className="h-">
                {/* <img src={user} alt="" /> */}
                <FontAwesomeIcon icon={faMobile} />
                <h4>Mobile :- {selectedUser.mobile} </h4>
                {/* <h4>Mobile :- 9012666255</h4> */}
              </div>
              <div className="h-">
                {/* <img src={user} alt="" /> */}
                <FontAwesomeIcon icon={faMale} />
                <h4>Gender:- Male</h4>
              </div>
              <div className="h-">
                {/* <img src={user} alt="" /> */}
                <FontAwesomeIcon icon={faBook} />
                <h4>Course:- BCA</h4>
              </div>
              <div className="h-">
                {/* <img src={user} alt="" /> */}
                <FontAwesomeIcon icon={faUniversity} />
                <h4>Silver Oak University</h4>
              </div>
              <div className="h-">
                {/* <img src={user} alt="" /> */}
                <FontAwesomeIcon icon={faCalendar} />
                <h4>DOB:- {selectedUser.dob} </h4>
                {/* <h4>DOB:- 04-09-2004</h4> */}
              </div>
              <div className="h-">
                {/* <img src={user} alt="" /> */}
                <FontAwesomeIcon icon={faEnvelope} />
                <h4>Email:- {selectedUser.em}</h4>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {action === "Payments" ? (
          <div className="payment-cont">
            <div className="amount">
              <h2>Total Outstanding Amount</h2>
              <h3> {selectedUser.fees} Rs.</h3>
              <button className="pay">Pay Now</button>
            </div>
            <div className="payments-">
              <button className="payment-gate">Pay With Card</button>
              <button className="payment-gate">Pay With UPI </button>
              <button className="payment-gate">Pay With Net Banking</button>
              <button className="payment-gate">EMI</button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {/*  end of profile sec  */}
        {/* {action === "Exams" ? (
          <div className="exams-cont">
            <h2>No Information Yet</h2>
          </div>
        ) : (
          <div></div>
        )} */}

        {action === "Exams" ? (
          <div className="exams-cont">
            <div className="exam-section">
              <h3
                onClick={() => {
                  setAction("Results");
                }}
              >
                Past Exam Results
              </h3>
              {examSections.results && <div className="exam-content"></div>}
            </div>
            <div className="exam-section">
              <h3 onClick={() => toggleExamSection("schedule")}>
                Exam Schedule
              </h3>
              {examSections.schedule && (
                <div className="exam-content">
                  <p>Your upcoming exam schedule is as follows:</p>
                  <ul>
                    <li>Mathematics: Monday, October 10th, 2023 at 9:00 AM</li>
                    <li>
                      .NET Programming: Tuesday, October 11th, 2023 at 10:30 AM
                    </li>
                    <li>
                      Data Structures: Wednesday, October 12th, 2023 at 2:00 PM
                    </li>
                    <li>
                      Operating Systems: Thursday, October 13th, 2023 at 11:15
                      AM
                    </li>
                    <li>
                      Digital Electronics of Technology: Friday, October 14th,
                      2023 at 3:45 PM
                    </li>
                  </ul>
                  <p>
                    Make sure to prepare well for your exams and arrive at the
                    examination venue on time.
                  </p>
                </div>
              )}
            </div>
            <div className="exam-section">
              <h3 onClick={() => toggleExamSection("resources")}>
                Study Resources
              </h3>
              {examSections.resources && (
                <div className="exam-content">
                  <div className="resou">
                    <p>For study resources kindly click on this icon.</p>
                    <a
                      href="https://drive.google.com/drive/folders/1fXJ9ZixN0yqSVXelXDAKZpxhCklnlzsW?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        size="lg"
                        style={{color: "#000000"}}
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="exam-section">
              <h3 onClick={() => toggleExamSection("registration")}>
                Exam Registration
              </h3>
              {examSections.registration && (
                <div className="exam-content">
                  <div className="resou">
                    <p>For registration fill up the form.</p>
                    <a
                      href="https://forms.gle/Y2rd3nVJi2zS5MVF"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        size="lg"
                        style={{color: "#000000"}}
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {action === "Results" ? (
          <div className="results-cont">
            <h2>Exam Results</h2>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Score (%)</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{result.subject}</td>
                    <td>{result.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="re">
              <h3>CGPA :- {selectedUser.cgpa} </h3>
              <h3>Percentage :- {selectedUser.per}% </h3>
              <h3> {selectedUser.status} </h3>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {action === "Academics" ? (
          <div className="aca-cont">
            <h2>Academics</h2>
            <ul>
              <li>Current Semester: 3</li>
              <li>Course: Bachelor of Computer Applications (BCA)</li>
              <li>University: Silver Oak University</li>
            </ul>
            <h3>Assignments</h3>
            <div className="assignments">
              {/* <div className="assignment">
                <input type="checkbox" id="assignment1" />
                <label htmlFor="assignment1">
                  Assignment 1: Digital Electronics of Technology
                </label>
              </div>
              <div className="assignment">
                <input type="checkbox" id="assignment2" />
                <label htmlFor="assignment2">
                  Assignment 2: Data Structures
                </label>
              </div>
              <div className="assignment">
                <input type="checkbox" id="assignment3" />
                <label htmlFor="assignment3">
                  Assignment 2: Oprating Systems
                </label>
              </div>
              <div className="assignment">
                <input type="checkbox" id="assignment4" />
                <label htmlFor="assignment4">
                  Assignment 2: Building Applications With .NET(C#)
                </label>
              </div> */}
              <div class="checkbox-wrapper-33">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__trigger visuallyhidden"
                  />
                  <span class="checkbox__symbol">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1"
                      viewBox="0 0 28 28"
                      height="28px"
                      width="28px"
                      class="icon-checkbox"
                      aria-hidden="true"
                    >
                      <path d="M4 14l8 7L24 7"></path>
                    </svg>
                  </span>
                  <p class="checkbox__textwrapper">
                    Assignment 1: Digital Electronics of Technology
                  </p>
                </label>
              </div>
              <div class="checkbox-wrapper-33">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__trigger visuallyhidden"
                  />
                  <span class="checkbox__symbol">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1"
                      viewBox="0 0 28 28"
                      height="28px"
                      width="28px"
                      class="icon-checkbox"
                      aria-hidden="true"
                    >
                      <path d="M4 14l8 7L24 7"></path>
                    </svg>
                  </span>
                  <p class="checkbox__textwrapper">
                    Assignment 2: Oprating Systems
                  </p>
                </label>
              </div>
              <div class="checkbox-wrapper-33">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__trigger visuallyhidden"
                  />
                  <span class="checkbox__symbol">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1"
                      viewBox="0 0 28 28"
                      height="28px"
                      width="28px"
                      class="icon-checkbox"
                      aria-hidden="true"
                    >
                      <path d="M4 14l8 7L24 7"></path>
                    </svg>
                  </span>
                  <p class="checkbox__textwrapper">
                    Assignment 2: Data Structures
                  </p>
                </label>
              </div>
              <div class="checkbox-wrapper-33">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    class="checkbox__trigger visuallyhidden"
                  />
                  <span class="checkbox__symbol">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1"
                      viewBox="0 0 28 28"
                      height="28px"
                      width="28px"
                      class="icon-checkbox"
                      aria-hidden="true"
                    >
                      <path d="M4 14l8 7L24 7"></path>
                    </svg>
                  </span>
                  <p class="checkbox__textwrapper">
                    Assignment 2: Building Applications With .NET(C#)
                  </p>
                </label>
              </div>
              {/* Add more assignments as needed */}
            </div>
            <h3>Daily Classwork Updates</h3>

            <ul className="classwork-updates">
              <li>Chapter 1 of .NET</li>
              <li>Chapter 5 of Data Structures</li>
              <li>Chapter 2 of Digital Electronics in Technology</li>
              <li>Chapter 3 of Oprating System</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
        {action === "Events" ? (
          <div className="event-cont">
            <div>
              <a
                href="https://silveroakuni.ac.in/foundation-day"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card card1">
                  <div>Foundation Day</div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://silveroakuni.ac.in/junoon-2023-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card card2">
                  <div>Junnon 2023</div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://silveroakuni.ac.in/celebrity-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card card3">
                  <div>Celebrities At SOU</div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://silveroakuni.ac.in/seminar-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card card4">
                  <div>Seminars</div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://silveroakuni.ac.in/rangmanch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card card5">
                  <div>Rangmanch 2022</div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://silveroakuni.ac.in/rass-rasiya-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="card card6">
                  <div>Rass Rasiya 2022</div>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {action === "Faculty Details" ? (
          <div className="fac-cont">
            <table>
              <thead>
                <tr>
                  <th>Name of Faculty</th>
                  <th>Subject</th>
                  <th>E-Mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Prof. Grishma</td>
                  <td>Data Structures</td>
                  <td>grishma@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Mukti</td>
                  <td>Data Structures</td>
                  <td>mukti@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Nitwik</td>
                  <td>Data Structures</td>
                  <td>nitwik@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Vishal P</td>
                  <td>ASP.NET</td>
                  <td>vishalp@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Vishal</td>
                  <td>PHP</td>
                  <td>vishal@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Deep</td>
                  <td>ASP.NET</td>
                  <td>deep@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Lokesh Kumar</td>
                  <td>Operating System</td>
                  <td>lokesh@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Alaap Jagdale </td>
                  <td>DET</td>
                  <td>alaap@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Priyakant</td>
                  <td>Data Structures</td>
                  <td>priyakant@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Dipika</td>
                  <td>PHP</td>
                  <td>dipika@gmail.com</td>
                </tr>
                <tr>
                  <td>Prof. Akash</td>
                  <td>ASP.NET</td>
                  <td>akash@gmail.com</td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Mini;
