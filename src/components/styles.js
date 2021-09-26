import styled from "styled-components";

export const Card = styled.div`
    height: 100%;
    padding: 24px;
    box-shadow: rgb(0 0 0 / 25%) 3px 4px 6px 1px;
    border-radius: 8px;
    margin-bottom: 15px;
`

export const BookNowLabel = styled.span`
    margin-right: 4px;
    color: inherit;
`

export const BookNow = styled.a`
    display: flex;
    justify-content: center;
    &:hover, &:active, &:visited {
        ${BookNowLabel} {
            color: #2b2523;
        }
    }
    &:visited {
        ${BookNowLabel} {
            color: #333;
        }
    }
`

export const BookNowIcon = styled.span`
    vertical-align: middle;
`

export const NavBarFixed = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);
`

export const FooterColumn = styled.div`
    text-align: center;

    @media (min-width: 768px){
        text-align: left;
    }

    * {
        text-align: center;

        @media (min-width: 768px){
            text-align: left;
        }
    }

    .fb_iframe_widget {
        max-width: 100%;
        > span {
            max-width: 100%;
        }
    }
`