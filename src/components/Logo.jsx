import React from 'react';
import styled from 'styled-components';
import Image from '../assets/images/logo.png';


const LogoStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    justify-content: center;
`;

const LogoImg = styled.img`
    width: 45px;
`;

const LogoSpan = styled.div`
    display: inline-block;
    font-size: 1.5em;
    color: white;
    margin-top: 1em;
    letter-spacing: .2em;
`;

const Logo = ()=>(
    <LogoStyled>
            <LogoImg src={Image} alt="shop logo"/>
        <LogoSpan>eShop</LogoSpan>
    </LogoStyled>
);

export default Logo;