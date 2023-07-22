import { styled } from "styled-components";



export const Container = styled.div`
    width: 1024px;
   

`;

export const Header = styled.div<{color}>`
    width: 100%;
    background-color: ${props=>props.color};
    height: 160px;
    text-align: center;
    border: solid 1px #304d41;
`;


export const HeaderText = styled.h1`
    color: white;
    padding-top: 30px;
       

`;

export const Body = styled.div`
    margin: 0 auto;
    width: 80%;  
    min-height: 500px;
    margin-bottom: 30px;
    position: relative;

`;

