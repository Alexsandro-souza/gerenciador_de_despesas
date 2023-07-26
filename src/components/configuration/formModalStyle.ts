import styled from 'styled-components';

export const wraper = styled.div`
    padding-left: 15px;
    margin-bottom: 1px;
    max-width: 150px;
`;
export const call = styled.h2<{}>`
    margin: 15px 0 15px 0;
    text-align: center;
    line-height: 25px;
    font-family: 'Poppings', sans-serif;
    font-weight: 300;    
`;

export const container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
`;

export const close = styled.button`
    position: absolute;
    right: 0;
    top: -55px;
    background-color: red;
    border: unset;
    font-weight: bold;
    font-size: 15px;
    padding: 1px 4px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
`;

export const divider = styled.h2<{colorLine}>`
    border-bottom: solid 2px ${props =>props.colorLine};
    border-radius: 2px;
    width: 150px;
    margin-bottom: 20px;
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    font-size: 23px;
    text-align: center;
`;

export const dividerRigth = styled.div<{colorLine}>`
    border-left: solid 3px ${props =>props.colorLine};
    margin: 15px 0;
    border-radius: 2px;
    width: 65%;
    display: flex;
    
`;

export const dividerLeft = styled.div`
    margin: 15px 0;
    border-radius: 2px;    
    width: 35%;
`;

export const input = styled.input`
    padding-left: 3px;
    margin: 5px 0 8px 0;
    width: 100px;
`;

export const select = styled.select`
    cursor: pointer;
    margin-top: 5px;
`;

export const option = styled.option`
    font-size: 12px;
`;
export const label = styled.label`
    font-family: 'Poppings', sans-serif;
    font-weight: 100;
    line-height: 1;
    font-size: 15px;
`;

export const button = styled.button`
    background-color: #55ca80;
    color: white;
    border-radius: 8px;
    border: none;
    padding: 5px;
    cursor: pointer;    
    position: absolute;
    right: 25px;
    bottom: 55px;
`;
