import React from 'react';
import styled from 'styled-components'
import Burger from './Burger';

const Nav = styled.nav`
            width:100%;
            height: 5.5rem;
            border-bottom: 2px solid #f1f1f1;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            background-color: #192a56;

            h2{
                color: #fff;
            }
            .site{
                color: red;
            }

            .logo{
                padding: 1.5rem 0;
            }
           
`
function NavBar() {
    return (
        <Nav>
            <div className="logo">
                <h2>Education<span className="site">Site</span></h2>
            </div>
            <Burger/>
         
        </Nav>
    )
}

export default NavBar
