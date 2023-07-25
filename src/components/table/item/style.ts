import styled from 'styled-components';


export const tableLine = styled.tr<{color}>`
  margin-bottom: 10px;
  
  @media (max-width: 605px) {
        border-bottom: 2px solid ${props=>props.color};
    }
    
`;


export const tableDate = styled.td`
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    padding-left: 4px;
    min-width: 94px;
    
    @media (max-width: 605px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
        

    }
    

`;

export const tableCategory = styled.td`
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    min-width: 122px;

    @media (max-width: 605px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const tableTitle = styled.td`
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    padding: 0px 5px;
    min-width: 122px;
    
    @media (max-width: 832px) {
        line-height: 17px;
    }

    @media (max-width: 605px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0;
    }

`;

export const tableValue = styled.td`
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    padding: 0 4px 0 2px;

    @media (max-width: 605px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5px;
    }
`;

export const category = styled.div<{color: string}>`
    background-color: ${props => props.color};
    padding: 2px 10px;
    color: white;
    border-radius: 10px;
    width: 100%;
    text-align: center;
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    margin: 2px 0;

    @media (max-width: 605px) {
        width: 165px;
        align-items: center;
        padding: 0 0;
    }

`;

export const value = styled.div`
    color: ${props => props.color};
    font-family: 'Poppings', sans-serif;
    font-weight: 300;
    width: 100%;
    white-space: nowrap;

    @media (max-width: 605px) {
        text-align: center;        
    }
`;