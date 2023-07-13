import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import portallogo from "../images/logo.png";
import './Header.css';

const Header=()=> {
    const [role,setRole] = useState("");
    useEffect(() => {
        setRole(localStorage.getItem("Role"));
      },[role]);
    let isLoggedIn = false;
    const admin = role === "admin" ? true : false;
    console.log(admin)

    return (
        <nav className="navbar navbar-expand-md " style={{backgroundColor:'#5791dd',display: 'flex', justifyContent:'flex-end', alignItems: 'end'}}>
            <div className="container-fluid">
                <Link to="/Welcome" className="text-decoration-none text-dark fs-5"><img src={portallogo} alt="Logo" width="35" height="35" className="d-inline-block align-text-middle" />  Blood Alliance</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"20rem"}}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {!admin && <li className="nav-item">
                        <Link to={role === null ? "/login" : "/AddDonor"} className="nav-link" style={{color:"white"}}>Become a Donor</Link>
                    </li>}
                    {admin && <li className="nav-item">
                        <Link to="/ViewDonor" className="nav-link " style={{color:"white"}}>View Donor</Link>
                    </li>}
                    {!admin && <li className="nav-item">
                        <Link to={role === null ? "/login" : "/AddSeeker"} className="nav-link " style={{color:"white"}}>Request Blood</Link>
                    </li>}
                    {admin && <li className="nav-item">
                        <Link to="/ViewSeeker" className="nav-link " style={{color:"white"}}>View Seeker</Link>
                    </li>}
                    {admin && <li className="nav-item">
                        <Link to="/AddBloodDetails" className="nav-link"  style={{color:"white"}}>Add Blood</Link>
                    </li>}
                    {admin && <li className="nav-item">
                        <Link to="/BloodDetails" className="nav-link " style={{color:"white"}}>View Blood</Link>
                    </li>}
                    <li className="nav-item">
                        <Link to="/Aboutus" className="nav-link " style={{color:"white"}}>AboutUs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Whydonate" className="nav-link " style={{color:"white"}}>Whydonate</Link>
                    </li>
                    {role === null ? <button type="submit" className="btn btn-outline-success mx-2">
                        <Link to="/login" className="nav-link " style={{color:"white",padding:'1px'}}><b>Login</b></Link>
                    </button> : <button type="button" className="btn btn-outline-danger mx-2">
                        <Link to="/" className="nav-link " style={{color:"white",padding:'1px'}} onClick={() => {setRole(null)
                        localStorage.clear()}}> <b>Logout</b></Link>
                    </button>}
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Header;