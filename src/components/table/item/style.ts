import styled from 'styled-components';

export const tableLine = styled.tr`

`;


export const tableCollumn = styled.td`
    
`;

export const category = styled.div<{color: string}>`
    background-color: ${props => props.color};
    padding: 2px 10px;
    color: white;
    border-radius: 10px;
    width: 70%;
    text-align: center;
`;

export const value = styled.div`
    color: ${props => props.color};
    
`;