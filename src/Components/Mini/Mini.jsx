import React, { useState, useEffect } from "react";
import "./Mini.css";
import user from "../Assets/person.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faCalendar,
  faEnvelope,
  faBook,
  faMale,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const Mini = ({ selectedUser, results }) => {
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
  const toggleExamSection = (section) => {
    setExamSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
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
              <h3 onClick={() => toggleExamSection("schedule")}>
                Exam Schedule
              </h3>
              {examSections.schedule && (
                <div className="exam-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus non ducimus id facilis fuga cupiditate quidem quia
                    dicta. Accusamus sequi, ad, itaque labore cupiditate quis ea
                    placeat, dolores distinctio delectus autem! Porro ab
                    mollitia iure adipisci, impedit quibusdam eos officiis
                    sapiente, perspiciatis, pariatur sequi laudantium culpa
                    error? Iure error omnis ut quia, inventore id, sapiente
                    nesciunt voluptate aliquam debitis consequatur molestiae
                    adipisci tempore! Deleniti debitis eveniet ratione quidem
                    quaerat consectetur tempore natus. Sapiente asperiores
                    placeat sit, nobis distinctio voluptate eveniet repudiandae
                    quibusdam molestias quod recusandae delectus voluptatibus.
                    Officiis repellendus voluptatem iusto. In nobis nemo magnam
                    esse fugiat quasi a cumque tempora impedit. Corrupti
                    voluptates dicta omnis. Qui ut quidem ipsa magnam amet nisi
                    quaerat consequuntur. Iusto non libero ullam, natus alias ad
                    officiis architecto culpa debitis delectus. Repudiandae, ex
                    quod impedit harum perspiciatis totam dignissimos qui quasi
                    obcaecati commodi alias, incidunt dicta similique ad
                    reprehenderit! Pariatur amet ea eum sunt inventore debitis,
                    hic, vero ab eaque ad expedita ipsam doloribus quidem
                    obcaecati minus quae esse, impedit nobis omnis officia?
                    Accusamus repellat exercitationem reprehenderit ullam,
                    laborum nostrum soluta, dolorum sapiente nemo neque
                    voluptate consequuntur? Hic magnam dolorum in, aspernatur
                    repudiandae pariatur! Ea nemo rerum est voluptatibus veniam
                    vero, pariatur consectetur saepe?
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus non ducimus id facilis fuga cupiditate quidem quia
                    dicta. Accusamus sequi, ad, itaque labore cupiditate quis ea
                    placeat, dolores distinctio delectus autem! Porro ab
                    mollitia iure adipisci, impedit quibusdam eos officiis
                    sapiente, perspiciatis, pariatur sequi laudantium culpa
                    error? Iure error omnis ut quia, inventore id, sapiente
                    nesciunt voluptate aliquam debitis consequatur molestiae
                    adipisci tempore! Deleniti debitis eveniet ratione quidem
                    quaerat consectetur tempore natus. Sapiente asperiores
                    placeat sit, nobis distinctio voluptate eveniet repudiandae
                    quibusdam molestias quod recusandae delectus voluptatibus.
                    Officiis repellendus voluptatem iusto. In nobis nemo magnam
                    esse fugiat quasi a cumque tempora impedit. Corrupti
                    voluptates dicta omnis. Qui ut quidem ipsa magnam amet nisi
                    quaerat consequuntur. Iusto non libero ullam, natus alias ad
                    officiis architecto culpa debitis delectus. Repudiandae, ex
                    quod impedit harum perspiciatis totam dignissimos qui quasi
                    obcaecati commodi alias, incidunt dicta similique ad
                    reprehenderit! Pariatur amet ea eum sunt inventore debitis,
                    hic, vero ab eaque ad expedita ipsam doloribus quidem
                    obcaecati minus quae esse, impedit nobis omnis officia?
                    Accusamus repellat exercitationem reprehenderit ullam,
                    laborum nostrum soluta, dolorum sapiente nemo neque
                    voluptate consequuntur? Hic magnam dolorum in, aspernatur
                    repudiandae pariatur! Ea nemo rerum est voluptatibus veniam
                    vero, pariatur consectetur saepe?
                  </p>
                </div>
              )}
            </div>

            <div className="exam-section">
              <h3 onClick={() => toggleExamSection("registration")}>
                Exam Registration
              </h3>
              {examSections.registration && (
                <div className="exam-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus non ducimus id facilis fuga cupiditate quidem quia
                    dicta. Accusamus sequi, ad, itaque labore cupiditate quis ea
                    placeat, dolores distinctio delectus autem! Porro ab
                    mollitia iure adipisci, impedit quibusdam eos officiis
                    sapiente, perspiciatis, pariatur sequi laudantium culpa
                    error? Iure error omnis ut quia, inventore id, sapiente
                    nesciunt voluptate aliquam debitis consequatur molestiae
                    adipisci tempore! Deleniti debitis eveniet ratione quidem
                    quaerat consectetur tempore natus. Sapiente asperiores
                    placeat sit, nobis distinctio voluptate eveniet repudiandae
                    quibusdam molestias quod recusandae delectus voluptatibus.
                    Officiis repellendus voluptatem iusto. In nobis nemo magnam
                    esse fugiat quasi a cumque tempora impedit. Corrupti
                    voluptates dicta omnis. Qui ut quidem ipsa magnam amet nisi
                    quaerat consequuntur. Iusto non libero ullam, natus alias ad
                    officiis architecto culpa debitis delectus. Repudiandae, ex
                    quod impedit harum perspiciatis totam dignissimos qui quasi
                    obcaecati commodi alias, incidunt dicta similique ad
                    reprehenderit! Pariatur amet ea eum sunt inventore debitis,
                    hic, vero ab eaque ad expedita ipsam doloribus quidem
                    obcaecati minus quae esse, impedit nobis omnis officia?
                    Accusamus repellat exercitationem reprehenderit ullam,
                    laborum nostrum soluta, dolorum sapiente nemo neque
                    voluptate consequuntur? Hic magnam dolorum in, aspernatur
                    repudiandae pariatur! Ea nemo rerum est voluptatibus veniam
                    vero, pariatur consectetur saepe?
                  </p>
                </div>
              )}
            </div>
            <div className="exam-section">
              <h3
                onClick={() => {
                  setAction("Results");
                }}
              >
                Past Exam Results
              </h3>
              {examSections.results && (
                <div className="exam-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus non ducimus id facilis fuga cupiditate quidem quia
                    dicta. Accusamus sequi, ad, itaque labore cupiditate quis ea
                    placeat, dolores distinctio delectus autem! Porro ab
                    mollitia iure adipisci, impedit quibusdam eos officiis
                    sapiente, perspiciatis, pariatur sequi laudantium culpa
                    error? Iure error omnis ut quia, inventore id, sapiente
                    nesciunt voluptate aliquam debitis consequatur molestiae
                    adipisci tempore! Deleniti debitis eveniet ratione quidem
                    quaerat consectetur tempore natus. Sapiente asperiores
                    placeat sit, nobis distinctio voluptate eveniet repudiandae
                    quibusdam molestias quod recusandae delectus voluptatibus.
                    Officiis repellendus voluptatem iusto. In nobis nemo magnam
                    esse fugiat quasi a cumque tempora impedit. Corrupti
                    voluptates dicta omnis. Qui ut quidem ipsa magnam amet nisi
                    quaerat consequuntur. Iusto non libero ullam, natus alias ad
                    officiis architecto culpa debitis delectus. Repudiandae, ex
                    quod impedit harum perspiciatis totam dignissimos qui quasi
                    obcaecati commodi alias, incidunt dicta similique ad
                    reprehenderit! Pariatur amet ea eum sunt inventore debitis,
                    hic, vero ab eaque ad expedita ipsam doloribus quidem
                    obcaecati minus quae esse, impedit nobis omnis officia?
                    Accusamus repellat exercitationem reprehenderit ullam,
                    laborum nostrum soluta, dolorum sapiente nemo neque
                    voluptate consequuntur? Hic magnam dolorum in, aspernatur
                    repudiandae pariatur! Ea nemo rerum est voluptatibus veniam
                    vero, pariatur consectetur saepe?
                  </p>
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
              <div class="card">
                <div>Event 1</div>
              </div>
            </div>
            <div>
              <div class="card">
                <div>Event 2</div>
              </div>
            </div>
            <div>
              <div class="card">
                <div>Event 3</div>
              </div>
            </div>
            <div>
              <div class="card">
                <div>Event 4</div>
              </div>
            </div>
            <div>
              <div class="card">
                <div>Event 5</div>
              </div>
            </div>
            <div>
              <div class="card">
                <div>Event 6</div>
              </div>
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
                  <td>Faculty 1</td>
                  <td>Subject 1</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 2</td>
                  <td>Subject 2</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 3</td>
                  <td>Subject 3</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 4</td>
                  <td>Subject 4</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 5</td>
                  <td>Subject 5</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 6</td>
                  <td>Subject 6</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 7</td>
                  <td>Subject 7</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 8</td>
                  <td>Subject 8</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 9</td>
                  <td>Subject 9</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 10</td>
                  <td>Subject 10</td>
                  <td>e@gmail.com</td>
                </tr>
                <tr>
                  <td>Faculty 11</td>
                  <td>Subject 11</td>
                  <td>e@gmail.com</td>
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
