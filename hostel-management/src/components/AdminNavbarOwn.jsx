import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminNavbarOwn(props) {

  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    console.log("Logging Out");
  }

  const navL = props.navL;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <a className="navbar-brand">
            <b>Hostel Management</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-start">
              <li className="nav-item">
                {
                (navL=="student")?
                <a className="nav-link active" id="stLink" aria-current="page" href="/studentsOwn">
                Students
                </a>
                :
                <a className="nav-link" id="stLink" aria-current="page" href="/studentsOwn">
                  Students
                </a>
                }
              </li>
              <li className="nav-item">
                {
                  (navL=="employee")?
                  <a className="nav-link active" id="emLink" href="/employeesOwn">
                  Employees
                  </a>
                  :
                  <a className="nav-link" id="emLink" href="/employeesOwn">
                  Employees
                  </a>
                }
              </li>
              <li className="nav-item">
                {
                  (navL=="room")?
                  <a className="nav-link active" id="rmLink" href="/roomsOwn">
                  Rooms
                  </a>
                  :
                  <a className="nav-link" id="rmLink" href="/roomsOwn">
                  Rooms
                  </a>
                }
              </li>
              <li className="nav-item">
                {
                  (navL=="fees")?
                  <a className="nav-link active" id="feLink" href="/feesOwn">
                  Fees
                  </a>
                  :
                  <a className="nav-link" id="feLink" href="/feesOwn">
                  Fees
                   </a>
                }
              </li>
              <li className="nav-item">
                {
                  (navL=="visitor")?
                  <a className="nav-link active" id="vsLink" href="/visitorsOwn">
                  Visitors
                  </a>
                  :
                  <a className="nav-link" id="vsLink" href="/visitorsOwn">
                  Visitors
                  </a>
                }
              </li>
              <li className="nav-item">
                {
                  (navL=="feedback")?
                  <a className="nav-link active" id="fdLink" href="/feedbacksOwn">
                  Feedbacks
                  </a>
                  :
                  <a className="nav-link" id="fdLink" href="/feedbacksOwn">
                  Feedbacks
                  </a>
                }
              </li>
            </ul>
            <button
              className="btn btn-outline-light"
              type="button"
              data-mdb-ripple-color="dark"
              onClick={logout}
            >
              logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
