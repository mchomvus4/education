import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
            width:100%;
            height: 5.5rem;
            border-bottom: 2px solid #f1f1f1;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;

            .logo{
                padding: 1.5rem 0;
            }
            ul{
                list-style:none;
                display: flex;
                flex-flow: row nowrap;
            }

            li{
                padding: 1.8rem 1rem;
            }
`
function NavBar() {
    return (
        <Nav>
            <div className="logo">
                <h2>Education<span>Site</span></h2>
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
        </Nav>
    )
}

export default NavBar
