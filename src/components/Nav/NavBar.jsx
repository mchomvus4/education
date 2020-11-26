import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

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
           
`
function NavBar() {
    return (
        <Nav>
            <div className="logo">
                <h2>Education<span>Site</span></h2>
            </div>
           <RightNav/>
        </Nav>
    )
}

export default NavBar
