import styled from 'styled-components';


export const container = styled.div`
    flex: 1;
    
`
export const title = styled.div`
    width: 100%;
    text-align: center;
    font-family: 'Poppings', sans-serif;
    font-weight: 300;

`;

export const value = styled.div`
    text-align: center;
    font-weight: bold;
    color: black;
    border-radius: 10px;
    font-family: 'Poppings', sans-serif;
    font-weight: 400;
    margin-top: 5px;
    
  
`;
export const valueDetour = styled.div<{color?:string}>`
    text-align: center;
    font-weight: bold;
    color: ${(props)=>props.color};
    border-radius: 10px;
    font-family: 'Poppings', sans-serif;
    font-weight: 600;
    margin-top: 5px;
    
  
`;