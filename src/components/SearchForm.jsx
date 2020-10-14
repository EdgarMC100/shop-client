import React, {Component} from 'react';
import styled from 'styled-components';

const InputGroup = styled.div`
    display:flex;
    width: 20rem;
`;
const FormStyled = styled.form`
    position: relative;
    display: inline-block !important;
    flex-wrap: wrap;
    align-items: stretch;
    margin-left: 2rem;
    margin-right:auto !important;
`;
const ButtonStyled = styled.button`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: #fff;
    background-color: #023552;
    border-color: #4e73df;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-top-right-radius:.35rem;
    border-bottom-right-radius:.35rem;
    ${'' /* border-radius-: .35rem */}
    transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
    text-transform: none;
    cursor: pointer;
`;
const ButtonGroup = styled.div`
`;
const InputStyled = styled.input`
    border-style: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius:5px;
    border: 2px solid whitesmoke;
    border-right:none;
    ${'' /* background:whitesmoke; */}
    outline-style: none;
    padding:5px;
    width:100%;
`;


class SearchForm extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <FormStyled>
                <InputGroup>
                    <InputStyled placeholder="Search"/>
                    <ButtonGroup>
                    <ButtonStyled><i className="fas fa-search"></i></ButtonStyled>
                    </ButtonGroup>
                </InputGroup>
            </FormStyled>
        );
    }
}

export default SearchForm;