import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Sans Serif' ;      
    }

    html, body, #app, #app>div {
        height: 100%;
    }

    button {
        background: none;
	    color: inherit;
	    border: none;
	    padding: 0;
	    font: inherit;
	    cursor: pointer;
	    outline: inherit;
    }
    
`;
