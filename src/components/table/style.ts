import {styled} from 'styled-components';

export const container = styled.div` 
    
`;

export const table = styled.table`
    width: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    -webkit-box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    -moz-box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    position: absolute;
    top: 103px;
    border-collapse: collapse;

    @media (max-width: 768px) {top: 133px;}
    @media (max-width: 715px) {top: 313px;}
    @media (max-width: 605px) {top: 236px;}
    @media (max-width: 519px) {top: 256px;}
    @media (max-width: 403px) {top: 278px;}
    @media (max-width: 361px) {top: 304px;}
    @media (max-width: 337px) {top: 306px;}
    

`;

export const tableHead = styled.thead`
    @media (max-width: 605px) {
       display: none;
    }
`;

export const tableHeadDate = styled.th`
    width: 120px;
    text-align: left;
    padding: 10px;
    font-family: 'Poppings', sans-serif;
    font-weight: 600;
    



`;

export const tableHeadCategory = styled.th `
    width: 200px;
    text-align: left;
    padding: 10px;
    font-family: 'Poppings', sans-serif;
    font-weight: 600;



`;

export const tableHeadTitle = styled.th `
    text-align: left;
    padding: 10px;
    font-family: 'Poppings', sans-serif;
    font-weight: 600;



`;

export const tableHeadValue = styled.th`
    width: 160px;
    text-align: left;
    padding: 10px;
    font-family: 'Poppings', sans-serif;
    font-weight: 600;

`;