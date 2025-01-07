import { createGlobalStyle } from "styled-components";
import { mxw, breakpoints } from "../styles/mediaquerySettings";
import { fontFace } from "../utils/fontFace";
import {
  MontserratThin,
  MontserratLight,
  MontserratNormal,
  MontserratMedium,
  MontserratSemiBold,
  MontserratBold,
} from "../assets/fonts/index";

export const GlobalStyles = createGlobalStyle`

    ${fontFace("Montserrat", MontserratThin, 200, "normal")}
    ${fontFace("Montserrat", MontserratLight, 300, "normal")}
    ${fontFace("Montserrat", MontserratNormal, 400, "normal")}
    ${fontFace("Montserrat", MontserratMedium, 500, "normal")}
    ${fontFace("Montserrat", MontserratSemiBold, 600, "normal")}
    ${fontFace("Montserrat", MontserratBold, 700, "normal")}

    body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    background-color:  ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.defaultText};
    margin: 0;
    font-weight: 400;

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background: #eee;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
            cursor: pointer;
            
        }

        ${mxw(breakpoints.sm)`
            font-size: 14px;
        `}
    }

    section {
        margin-bottom: 100px;
        
        ${mxw(breakpoints.md)`
            margin-bottom: 50px;
        `}
    }

    html {
    box-sizing: border-box;
    }

    button{
        color: inherit;
    }

*,
*::after,
*::before {
    box-sizing: inherit;
}

ul {
    padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
}

a {
    outline: transparent;
    text-decoration: none;
    color: inherit;
}

input,
button,
textarea,
select {
    outline: transparent;
    font: inherit;
    border: inset;
    padding: 0;
    border: transparent;
    outline: transparent;
    background-color: transparent;
    cursor: pointer;
    transition: border .3s linear,background-color 5000s ease-in-out;

}

label {
    cursor: pointer;
}

`;
