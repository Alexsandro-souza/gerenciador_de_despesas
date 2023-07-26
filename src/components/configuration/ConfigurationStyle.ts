import { styled } from 'styled-components';



export const configuration = styled.div<{show : string}>`
    position: absolute;
    z-index: 999;
    cursor: pointer;
    background-image: url(https://www.pngmart.com/files/5/Gears-PNG-File.png);
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    border-radius: 50%;
    left: 5px;
    top: 15px;
   
    display: ${props => (props.show == 'false'? 'block' : 'none')};
    
    
    
`;