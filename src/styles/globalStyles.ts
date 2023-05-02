import { createGlobalStyle } from "styled-components";
import { theme } from "./defaultVariables";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.family.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     overflow-x: hidden;
     background-color: ${theme.colors.backgroundColor};

  }

  a{
    text-decoration: none;
    color: white;
  }
  
  h1{
    width: 22vw;
    margin: 1vw 0 2vw 1vw;
    transform: scale(calc(1vw / 100));
  }
  
  p {
    margin: 0 0 0 1vw 
  }
  
  section {
    /* width:100%; */
    height: 100%;
    /* min-width: 500px; */
  }
`;
