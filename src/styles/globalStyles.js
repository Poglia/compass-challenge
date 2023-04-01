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
     overflow-y: hidden;

 /* define o tamanho da fonte do elemento raiz */
     font-size: 16px;
  }

  a{
    text-decoration: none;
    color: white;
  }

  form {
    width: 30rem;
    /* min-width: 300px; */
    /* background-color:red; */
  }
  
  h1{
    /* background-color:blue; */
    width: 25rem;
    margin: 1rem 0 2rem 0
  }
  
  h3{
    margin: 2rem 0 0 0
  }
  
  p {
    /* background-color:green; */
    
  }
  
  section {
    /* background-color: purple */
    /* justify-content: space-between */
    /* max-height: 30%; */
  }

  input{
    /* height: 30px; */
  }

`;
