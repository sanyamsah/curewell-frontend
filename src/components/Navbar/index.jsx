import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    const onLogoutHandler = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/");
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#155724" }}> 
            <div className="container-fluid">
                <Link className="navbar-brand text-white fw-bold" to="/">CureWell</Link> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto"> 
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 py-1 bg-success rounded-pill mx-2" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 py-1 bg-success rounded-pill mx-2" to="/doctors">Doctors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 py-1 bg-success rounded-pill mx-2" to="/specializations">Specializations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 py-1 bg-success rounded-pill mx-2" to="/surgery">Today's Surgery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white px-3 py-1 bg-success rounded-pill mx-2" to="/add/doctor">Add Doctor</Link>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                    {!isLoggedIn ? (
                        <Link className="btn btn-primary" to={"/login"}>
                            Login
                        </Link>
                    ) : (
                        <button className="btn btn-danger" onClick={onLogoutHandler}>
                            Logout
                        </button>
                    )}

                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
