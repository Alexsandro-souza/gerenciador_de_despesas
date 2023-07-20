import styled from 'styled-components';

export const wraper = styled.div`
    padding-bottom: 5px;
    margin-bottom: 1px;
    max-width: 150px;
`;

export const divider = styled.div`
    border-bottom: solid 3px green;
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
    margin-top: 50px;
`

export const call = styled.h2`
    margin: 19px 0 80px 0;
    text-align: center;
    line-height: 25px;
    
    
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
`;