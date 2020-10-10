import React from 'react';
import styled from 'styled-components';

const MainStyled = styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
`;

const Main = ({children})=>(
    <MainStyled>
        {children}
    </MainStyled>
);

export default Main;