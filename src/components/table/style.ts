import {styled} from 'styled-components';

export const table = styled.table`
    width: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    -webkit-box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);
    -moz-box-shadow: 12px 8px 8px -6px rgba(168,162,162,0.49);

`;

export const tableHeadColumn = styled.th <{width? : number}>`
    width: ${(props) => props.width ? `${props.width}px` : `auto`};
    text-align: left;
    padding: 10px;

`;