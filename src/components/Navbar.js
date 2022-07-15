import React from "react";
import Index from "./Index";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";



const Navbar = ({set_id}) =>{

    const _id = localStorage.getItem('token');

    set_id(_id);

    console.log("Navbar: ID: " + _id);

    if(_id !== null)
    {
        console.log("token:  " + _id);

        return(
            <>
            
            <nav className = "navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" style={{fontSize:'25px',textDecoration:'none'}} className="navbar-brand">My Travel Experience</Link>
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link to={`/view-palaces/${_id}`} className="nav-link" style={{fontSize:'20px'}}>view places</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/view_users" className="nav-link" style={{fontSize:'20px'}}>user list</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link" style={{fontSize:'20px'}}>profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/CreatePlaces" className="nav-link" style={{fontSize:'20px'}}>add new place</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav><br/>
            </>
        )
        }
    else{
return(
    <>
    
    <nav className = "navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <Link to="/" style={{color:'black',fontSize:'30px',textDecoration:'none'}} className="navbar-brand">My Travel Experience</Link>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <Link to='/login' className="nav-link" style={{fontSize:'20px'}}>login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Signup" className="nav-link" style={{fontSize:'20px'}}>register</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <br/>
    </>
)
}
}

export default Navbar;