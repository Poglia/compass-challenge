"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyles = void 0;
const styled_components_1 = require("styled-components");
const defaultVariables_1 = require("./defaultVariables");
exports.GlobalStyles = (0, styled_components_1.createGlobalStyle) `
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${defaultVariables_1.theme.fonts.family.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     overflow-x: hidden;
     background-color: ${defaultVariables_1.theme.colors.backgroundColor};

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
//# sourceMappingURL=globalStyles.js.map