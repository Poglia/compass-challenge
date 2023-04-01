import { createGlobalStyle } from "styled-components";
import { theme } from "./defaultVariables"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${theme.fonts.family.default}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: hidden;
  }
`;
