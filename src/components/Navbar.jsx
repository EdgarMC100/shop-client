import React from 'react';
import styled from 'styled-components'


const NavbarStyled = styled.nav`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    margin-top: 2em;
`;

const AnchorStyled = styled.a`
    font-size: 1em;
    font-weight: 500;
    width: 100%;
    height: 15px;
    text-decoration: none;
    display: block;
    /* margin: 10px; */
    color: white;
    padding: 10px 20px;

    &:hover{
        background-color: #ddb550;
    }
`;

const Menu = ()=>(
    // <nav className="menu" id="menu">
    <NavbarStyled>
        <AnchorStyled>Orders</AnchorStyled>
        <AnchorStyled href="#">Shipping Status</AnchorStyled>
        <AnchorStyled href="#">Other</AnchorStyled>
        <AnchorStyled href="#">Other</AnchorStyled>
    </NavbarStyled>

    // </nav>
);


export default Menu;

// <nav class="menu" id="menu">
// <a href="#" id="orders">Orders</a>
// <a href="#">Shipping Status</a>
// <a href="#">Other</a>
// <a href="#">Other</a>
// </nav>