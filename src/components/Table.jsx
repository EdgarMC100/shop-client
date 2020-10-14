import React from 'react';
import styled from 'styled-components'
const TableStyled = styled.table`
    width:85%;
    ${'' /* margin:0 auto; */}
`;

const TableHeaderStyled = styled.thead`
    width: 100%;
    position: fixed;
    background-color: white;
    z-index: 99;
    margin-bottom: 10px;
    border-bottom: 1px solid gainsboro;
`;

const TableTrStyled = styled.tr`
    
`;

const TableThStyled = styled.th`
    color: #013551;
    padding-left:65px;
    padding-top: 20px;
    text-align: left;
    padding-bottom: 10px;
`;

const TableBodyStyled = styled.tbody`
    width:75%;
    top:40px;
    position: absolute;
    /* bottom: -29px; */
    bottom: -570px;
    padding-top: 20px;
    padding-left:50px;
    height: 0px;
    margin:0 auto;

`;
const Table = ()=>(
    <TableStyled>
        <TableHeaderStyled>
            <TableTrStyled>
                <TableThStyled>Order<a><i className="fas fa-sort-up"></i></a></TableThStyled>
                <TableThStyled>Products</TableThStyled>
                <TableThStyled>Created At</TableThStyled>
                <TableThStyled>Shipping Method</TableThStyled>
                <TableThStyled>Shipping Cost</TableThStyled>
            </TableTrStyled>
        </TableHeaderStyled>
        <TableBodyStyled>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>

            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p><p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p><p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p><p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p><p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p><p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
            <p>Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum</p>
        </TableBodyStyled>
    </TableStyled>
);

export default Table;