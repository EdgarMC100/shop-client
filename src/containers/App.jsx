import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;
        margin:0;
        padding:0;
        background: #f5f5f5;
    }
`;

const App = () =>{
    return (
        <Main>
        <GlobalStyle/>
            <Sidebar>
                <Logo></Logo>
                <Navbar></Navbar>
            </Sidebar>
        </Main>
    );
}

export default App;