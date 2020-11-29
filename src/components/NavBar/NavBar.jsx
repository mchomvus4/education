import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
class NavBar extends Component {

           state = {
           toggle: false
         }
    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
    render () {
        const { toggle } = this.state;
        return (
            <>
                <header>
                    <div className="logo">
                        <h1 className="edu">education<span className="site">site</span></h1>
                    </div>
                    <ul className={  toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/course">Courses</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/page">Pages</Link></li>
                        <li><Link to="/event">Events</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li className="close" onClick={this.menuToggle}>X</li>
                    </ul>
                    <div className="menu" onClick={this.menuToggle}>Menu</div>
                </header>
            </>
        );
    };
};

export default NavBar;
