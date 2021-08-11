import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="NavContainer">
            <nav>
                <p><Link to="/" className="link">Me</Link></p>
                <p><Link to="/Skills" className="link">Skills</Link></p>
                <p><Link to="/Jobs" className="link">Jobs</Link></p>
                <p><Link to="/Projects" className="link">My proyects</Link></p>
            </nav>
        </div>
    );
}

export default Navbar
