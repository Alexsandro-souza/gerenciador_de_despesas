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

`;

export const buttom = styled.button`
    background-color: #55ca80;
    color: white;
    border-radius: 8px;
    border: none;
    padding: 5px;
    cursor: pointer;
    margin-top: 5px;

`

export const input = styled.input<{InputProps}>`
    outline: none;
    border: solid 1px black;
    padding: ${(props) => props.padding ? `${props.padding}px` : 0} 0;
    border-radius: 5px;



`


export const inputCategory = styled.select<{padding?: number}>`
    padding: ${(props) => props.padding ? `${props.padding}px` : 0} 0;
    border-radius: 5px;
`;

export const optionCategory = styled.option`
    outline: none;
   
    
`;

export const title = styled.label`
    font-weight: bold;
    font-style: italic;

`;

export const wrape = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;    
    
`
export const containerWrape = styled.div`
    display: flex;
    gap: 15px;
`;