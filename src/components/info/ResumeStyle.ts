import styled from 'styled-components';


export const container = styled.div`
    flex: 1;
    
`
export const title = styled.div`
    width: 100%;
    text-align: center;

`;

export const value = styled.div<{color?:string}>`
    text-align: center;
    font-weight: bold;
    color: ${(props)=>props.color ?? 'black'};
    border-radius: 10px;
    
  
`;