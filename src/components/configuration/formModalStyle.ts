import styled from 'styled-components';

export const wraper = styled.div`
    padding-left: 6%;
    
`;

export const wraperPerfil = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 30px;

    @media(max-width: 440px){gap: 5x;}

`;

export const wraperCategory = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 30px;

    @media(max-width: 440px){gap: 0;}
`;

export const call = styled.h2`
    padding: 40px 0 15px 0;
    text-align: center;
    line-height: 25px;
    font-family: 'Poppings', sans-serif;
    font-weight: 300; 
    margin: 0 5% 0 5%;   
`;

export const P = styled.p`
    font-family: 'Poppings', sans-serif;
    font-weight: 500; 
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
`;

export const container = styled.div`
    position: relative; 
`;

export const close = styled.button`
    position: absolute;
    right: 15px;
    top: -70px;
    background-color: red;
    border: unset;
    font-weight: bold;
    font-size: 15px;
    padding: 1px 4px;
    border-radius: 50%;
    color: white;
    cursor: pointer;

    @media(max-width: 622px){
        top: -95px;
        right: 5px;
    }
`;

export const divider = styled.div<{colorLine}>`
    border-bottom: solid 2px ${props =>props.colorLine};
    border-radius: 2px;
    margin-left: 5%;
    width: 90%
`;

export const input = styled.input`
    padding-left: 3px;
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
    margin-top: 13px;
    width: 40%;
    align-self: center;
    cursor: pointer;
    
`;
