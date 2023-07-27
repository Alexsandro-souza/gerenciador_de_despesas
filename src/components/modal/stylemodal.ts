import { styled} from "styled-components";

export const modalOverlay = styled.div<{isOpen}>`
    position: fixed;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(80,80,80, 0.8);
    display: ${props=>props.isOpen? `block`:`none`};
    
`;

export const modal = styled.div`
    width: 50%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    position: relative;
    transition: 1s;

    @media(max-width: 335px){width: 65%;}
    
`;