import { styled } from "styled-components";



export const Container = styled.div`
    width: 1024px;
   

`;

export const Header = styled.div<{color}>`
    width: 100%;
    background-color: ${props=>props.color};
    height: 160px;
    text-align: center;
    border-radius: 19px;  
    
`;

export const HeaderWraper = styled.div<{color}>`
    width: 100%;
    background-color: ${props=>props.color};
    height: 17px;
    
`;


export const HeaderText = styled.h1`
    color: white;
    padding-top: 10px;
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    line-height: 35px;
       

`;

export const Body = styled.div`
    margin: 0 auto;
    width: 80%;  
    min-height: 500px;
    margin-bottom: 30px;
    position: relative;
    background-color: black;

    @media (max-width: 425px) {width: 90%;}
    @media (max-width: 377px) {top: 10px;}
    @media (max-width: 290px) {width: 95%;}

`;

