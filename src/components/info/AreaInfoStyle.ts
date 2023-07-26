import styled from 'styled-components';


export const container = styled.div`
    width: 100%;
    padding: 10px;    
    background-color: white;
    border-radius: 10px;
    box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    -webkit-box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    -moz-box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    display: flex;
    position: absolute;
    top: -55px;

    @media (max-width: 768px) {
        display: inline-block;
    }
     @media (max-width: 334px) {   top: -40px;}
`;

export const filterMonth = styled.div`
    flex: 1;
    display: flex;
    margin-right: 15px;
    align-items: center;
    
`;

export const filterMonthArrow = styled.div`
    width: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 25px;
`;

export const displayFilter = styled.div`
    flex: 1;
    text-align: center;

`;

export const resumeInfo = styled.div`
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
  
`;

//