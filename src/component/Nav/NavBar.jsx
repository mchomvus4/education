import React from 'react';
import './NavBar.css';
function NavBar() {
    return (
        <div className="navbar_container">
            <div className="logo">
                <h2>Education <span>Site</span></h2>
            </div>
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>Pages</li>
                <li>Events</li>
                <li>Blog</li>
                <li>Contact</li>

            </ul>
            
        </div>
    )
}

export default NavBar
