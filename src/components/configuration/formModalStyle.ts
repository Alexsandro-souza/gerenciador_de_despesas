import styled from 'styled-components';

export const wraper = styled.div`
    padding: 5px;
    margin-bottom: 1px;
    max-width: 150px;
`;

export const divider = styled.div<{colorLine}>`
    border-bottom: solid 3px ${props =>props.colorLine};
    margin: 15px 0;
    border-radius: 10px;
`;

export const button = styled.button`
    background-color: #55ca80;
    color: white;
    border-radius: 8px;
    border: none;
    padding: 5px;
    cursor: pointer;
    margin-top: 15px;
`

export const call = styled.h2<{}>`
    margin: 19px 0 50px 0;
    text-align: center;
    line-height: 25px;
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    
    
    
`;

export const input = styled.input`
    padding-left: 3px;
    
`;

export const close = styled.button`
    position: absolute;
    right: 0;
    top: -23px;
    background-color: red;
    border: unset;
    font-weight: bold;
    font-size: 15px;
    padding: 1px 4px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
`;

export const container = styled.div`
    position: relative;

    @media (max-width: 700px) {}
`;

export const select = styled.select`
    cursor: pointer;
`;

export const label = styled.label`
    font-family: 'Poppings', sans-serif;
    font-weight: 100;

`;
