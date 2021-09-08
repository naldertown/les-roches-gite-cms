import { keyframes } from 'styled-components';

export const fadeScaleLinear = (start, end) => {
    
    return keyframes`
        0% {
            opacity: 0;
            transform: scale(${start});
        }

        100% {
            opacity: 100%;
            transform: scale(${end});
        }
    `;
}

export const fadeTransalateLinear = (start, end) => {
    
    return keyframes`
        0% {
            opacity: 0;
            transform: translate(${start});
        }

        100% {
            opacity: 100%;
            transform: translate(${end});
        }
    `;
}