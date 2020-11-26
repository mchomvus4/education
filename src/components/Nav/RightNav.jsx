import React from 'react'
import styled from 'styled-components'

const UL = styled.ul`
            list-style:none;
            display: flex;
            flex-flow: row nowrap;
   

     li{
             padding: 1.8rem 1rem;
         }
`;
function RightNav() {
    return (
        <UL>
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>Pages</li>
                <li>Events</li>
                <li>Blog</li>
                 <li>Contact</li>
                
            </UL>
    )
}

export default RightNav
