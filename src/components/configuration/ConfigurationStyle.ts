import { styled } from 'styled-components';


export const configuration = styled.div<{show : boolean}>`
    position: absolute;
    z-index: 999;
    cursor: pointer;
    top: -150px;
    right: -11.5%;
    font-size: 20px;
    display: ${props => (props.show ? 'none' : 'block')};
`;