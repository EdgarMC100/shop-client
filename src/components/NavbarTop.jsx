import React, {Component} from 'react';
import styled from 'styled-components';
import Image from '../assets/images/avatar-michelle.jpg';




const NavBarStyled = styled.nav`
    display:flex;
    flex-flow:row no-wrap;
    width:85%;
    ${'' /* width: -moz-available;
    width: -webkit-fill-available;  */}
    height: 4.5rem;
    position:fixed;
    top:0;
    border-bottom: 1px solid rgb(221, 215, 215);
    background:whitesmoke;
    ${'' /* z-index: 99; */}
    box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
    align-items:center;
    ${'' /* justify-content:space-between; */}
`;


const SpanNameStyled = styled.span`
    color: #858796!important;
    margin-right: .5rem!important;
    font-size: 80%;
    font-weight: 400;
`;
const SpanStyled = styled.span`
    position: absolute;
    transform: scale(.7);
    transform-origin: top right;
    right: .25rem;
    margin-top: -.25rem;
    color: #fff;
    background-color: #e74a3b;
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .35rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const ItemLi = styled.li`
    margin-right: .25rem!important;
    margin-left: .25rem!important;
`;

const LiAnchor = styled.a`
    position:relative;
    color: #d1d3e2;
    height: 4.5rem;
    display: flex;
    align-items: center;
    padding: 0 .75rem;
    &:hover{
        color: #858796;
    }
`;

const DividerDiv = styled.div`
    width: 0;
    border-right: 1px solid #e3e6f0;
    height: calc(4.375rem - 2rem);
    margin: auto 1rem;
`;

const NavbarNav = styled.nav`
    display:flex;
    margin-bottom: 0;
    list-style: none;
    margin-left:auto !important;
`;

const IStyled = styled.i`
    font-weight: 900;
    font-family: "Font Awesome 5 Free";
    text-align: center;
    width: 1.25em;
    font-style: normal;
`;


const ImageStyled = styled.img`
    width:30px;
    height:30px;
    border-radius:100%;
    margin: auto 1rem;

`;

const NavbarTop = ({children})=>(
    <div>
        <NavBarStyled>
            {children}
            <NavbarNav>
                <ItemLi>
                    <LiAnchor>
                        <IStyled className="fas fa-bell"></IStyled>
                        <SpanStyled>3+</SpanStyled>
                    </LiAnchor>
                </ItemLi>
                <ItemLi>
                    <LiAnchor>
                        <IStyled className="fas fa-envelope"></IStyled>
                        <SpanStyled>1</SpanStyled>
                    </LiAnchor>
                </ItemLi>
                <DividerDiv></DividerDiv>
                <ItemLi>
                    <LiAnchor>
                        <SpanNameStyled>Edgar Ubaldo</SpanNameStyled>   
                        <ImageStyled src="https://i.ibb.co/QdSWMwR/me.jpg"></ImageStyled>
                    </LiAnchor>
                </ItemLi>
                
            </NavbarNav>
        </NavBarStyled>
    </div>
)
// class NavbarTop extends Component{
//     render(){
//         return(
            
//         );
//     }
// }

export default NavbarTop;