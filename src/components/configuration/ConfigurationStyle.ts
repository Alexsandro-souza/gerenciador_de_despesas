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
    border: unset;
    background-color: white;
    background-image: url(https://www.pngmart.com/files/5/Gears-PNG-File.png);
    border-radius: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;    
`;