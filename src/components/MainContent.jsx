import React from 'react';
import styled from 'styled-components';


const MainStyled = styled.main`
    position: relative;
    top: 70px;
`;
const MainContent = ({children})=>(
    <MainStyled>
        {children}
    </MainStyled>

);

export default MainContent;