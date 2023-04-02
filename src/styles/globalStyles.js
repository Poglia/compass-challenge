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
     /* overflow-y: hidden; */
     overflow-x: hidden;

 /* define o tamanho da fonte do elemento raiz */
     font-size: 16px;
  }

  a{
    text-decoration: none;
    color: white;
  }

  form {
    /* min-width: 300px; */
    /* background-color:red; */
  }
  
  h1{
    /* background-color:blue; */
    width: 22vw;
    margin: 1vw 0 3vw 2vw
  }
  
  h3{
    margin: 2vw 0 0 2vw
  }
  
  p {
    /* background-color:green; */
    margin: 0 0 0 2vw
    
  }
  
  section {
    width:100%
    height: 100%;
    min-width: 500px;
    /* max-width: 1000px; */
    /* background-color: purple */
    /* justify-content: space-between */
    /* max-height: 30%; */
  }
/* 
  input{
    transform: scale(0.5);
  } */

`;
