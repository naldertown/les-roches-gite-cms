import styled from 'styled-components';
import { fadeScaleLinear, fadeTransalateLinear } from '../components/animations';


export const Hero = styled.div`
    animation-name: ${fadeTransalateLinear('-15px', 0)};
    animation-duration: 0.6s;
    animation-iteration-count: 1;
    background-size: cover
    background-position: center center
    background-attachment: scroll;

    @media (min-width: 787px) {
        background-attachment: fixed;
    }
`
export const HeroTitle = styled.h1`
    animation-name: ${fadeScaleLinear(0.85, 1)};
    animation-duration: 0.75s;
    animation-iteration-count: 1;
`
export const HeroSubTitle = styled.h3`
    animation-name: ${fadeScaleLinear(0.85, 1)};
    animation-duration: 0.75s;
    animation-iteration-count: 1;
`