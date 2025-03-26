import { Link } from "react-router-dom";

const Navbar = () => {
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
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
