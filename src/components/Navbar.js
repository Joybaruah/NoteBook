import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogin = () =>{
    localStorage.removeItem('token');
    navigate("/login")
  }

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NoteBook 📝
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="HomeBtn p-1">
                  Home
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('token')? <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link to="/signup">
                <button className="btn btn-light btn-sm me-md-2" type="button">
                  SIGN UP
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-light btn-sm me-md-2" type="button">
                  LOGIN
                </button>
              </Link>
            </div> : <button onClick={handleLogin} className="btn btn-light btn-sm me-md-2" type="button">
                  LOG OUT
                </button> }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
