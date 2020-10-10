import React  from 'react';
import styled from 'styled-components';

const SidebarContainerStyled = styled.div`
    width: 15%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    background: linear-gradient(to left, #023552 1%, #013651 100%);
`;




const Sidebar = ({children})=>(
    <div className="Sidebar">
        <SidebarContainerStyled>
            {children}
        </SidebarContainerStyled>
    </div>
);

export default Sidebar;