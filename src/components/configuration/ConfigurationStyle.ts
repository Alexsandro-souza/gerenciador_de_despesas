import { styled } from 'styled-components';


export const configuration = styled.div<{show : string}>`
    position: absolute;
    z-index: 999;
    cursor: pointer;
    top: -150px;
    right: -11.5%;
    font-size: 20px;
    display: ${props => (props.show == 'false'? 'block' : 'none')};

    @media (max-width: 377px) {top: -160px;}
`;

export const wraper = styled.div`
    padding: 0 3px 2px 3px;
    border: unset;
    border-radius: 7px;
    background-color: white;
    font-size: 25px;
    line-height: 25px;
    
`;