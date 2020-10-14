import React from 'react';
import Main from '../components/Main';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import {createGlobalStyle} from 'styled-components';
import css from '../App.css';
import NavbarTop from '../components/NavbarTop';
import SearchForm from '../components/SearchForm';
import styled from 'styled-components';
import Table from '../components/Table'; 

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;
        margin:0;
        padding:0;
        ${'' /* background: #f5f5f5; */}
    }
`;
const SectionStyled  = styled.section`
    height:100vh;
    width:75%;
    ${'' /* z-index:0; */}
    ${'' /* margin:0 auto; */}
    ${'' /* position:fixed; */}
    ${'' /* left:-100px; */}
`;

const DivCentered = styled.div`
    ${'' /* height:100vh; */}
    max-width:75%;
    ${'' /* margin:0 auto; */}
`;
const App = () =>{
    return (
        <Main>
        <GlobalStyle/>
            <Sidebar>
                <Logo></Logo>
                <Navbar></Navbar>
            </Sidebar>
            <MainContent>
                <NavbarTop>
                    <SearchForm></SearchForm>
                </NavbarTop>
                <SectionStyled>
                    <DivCentered>
                        <Table>
                        </Table>
                    </DivCentered>
                </SectionStyled>
            </MainContent>
        </Main>
    );
}

export default App;