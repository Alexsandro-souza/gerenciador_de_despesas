import styled from 'styled-components';

interface InputProps {
    padding?: number;
    width? : number; 

}

export const container = styled.div`
    width: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    -webkit-box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    -moz-box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    position: absolute;
    top: 25px;

    @media (max-width: 768px) {top: 60px;}
    @media (max-width: 372px) {top: 83px;}
    
    

`;


export const input = styled.input<InputProps>`
    outline: none;
    border: solid 1px black;
    padding: ${({padding}) => padding ? `${padding}px` : 0} 0;
    width: ${({width}) => width ? `${width}%` : 0};
    border-radius: 5px;

    @media (max-width: 605px) {
        min-width: 105px;
    }

`


export const inputCategory = styled.select<InputProps>`
    padding: ${({padding}) => padding ? `${padding}px` : 0} 0;
    min-width: ${({width}) => width ? `${width}px` : 0};
    border-radius: 5px;

    @media (max-width: 605px) {
        min-width: 105px;
    }
`;

export const optionCategory = styled.option`
    outline: none;
`;

export const title = styled.label`
    font-style: italic;
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    min-width: 55px;

    @media (max-width: 605px) {
      padding-right: 15px;
        
    }

`;

export const containerWrape = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-around;
    
   

    @media (max-width: 715px) {
        flex-direction: column;
        gap: 5px;
    }
`;

export const wrape = styled.div`
    display: flex;
    flex-direction: column;    

    @media (max-width: 605px) {
        
        flex-direction: row;
        
    }
`
export const wrapeButtom = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 605px) {
        justify-content: end;
        
    }

`
export const buttom = styled.button`
    background-color: #55ca80;
    color: white;
    border-radius: 8px;
    border: none;
    padding: 5px;
    cursor: pointer;
    margin-top: 5px;
    width: 80px;  

`