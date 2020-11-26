import React from 'react';
import './NavBar.css';
import RightNav from './RightNav';
function NavBar() {
    return (
        <div className="navbar_container">
            <div className="logo">
                <h2>Education <span>Site</span></h2>
            </div>
            <RightNav/>
            
        </div>
    )
}

export default NavBar
