import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
    return (
        <div>
            <header>
                <div className="logo">
                    <h1>education<span className="site">site</span></h1>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/course">Courses</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/page">Pages</Link></li>
                    <li><Link to="/event">Events</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="close">X</li>
                </ul>
                <div className="menu">Menu</div>
            </header>
        </div>
    )
}

export default NavBar
