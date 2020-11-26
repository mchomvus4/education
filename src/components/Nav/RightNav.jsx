import React from 'react'
import styled from 'styled-components'

const UL = styled.ul`
     list-style:none;
     display: flex;
     flex-flow: row nowrap;
   

     li{
         padding: 1.8rem 1rem;
       }
       @media (max-width:768px){
           flex-flow: column nowrap;
           background-color: #0d2538;
           position: fixed;
           transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
           top: 0;
           right: 0;
           height: 100vh;
           width: 20rem;
           padding-top:3.5rem;
           transition: transform 0.3s ease-in-out;
       }

       li{
           color: #fff; 
       }
`;
function RightNav({open}) {
    return (
        <UL open={open}>
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
