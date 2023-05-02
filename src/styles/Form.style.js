"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDivError = exports.SButton = exports.SInput = exports.SForm = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const defaultVariables_1 = require("../styles/defaultVariables");
exports.SForm = styled_components_1.default.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 700px; */
`;
exports.SInput = styled_components_1.default.input `
  font-size: 0.8vw;
  color: white;

  background-color: transparent;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 22vw;
  height: 2.5vw;
  min-width: 50px;
  max-width: 500px;
  min-height: 15px;

  border: 0.1vw solid #f5f5f5;
  border-radius: 100px;

  margin-top: 1.2vw;
  padding: 1.5vw 1.5vw;

  ${({ backGroundIcon }) => (0, styled_components_1.css) `
    background-image: url(${backGroundIcon});
    background-repeat: no-repeat;
    background-position: 19vw, center;
    background-size: 1vw;
  `}

  ::placeholder {
    color: ${defaultVariables_1.theme.colors.text};
    font-size: 0.8vw;
    justify-content: center;
  }

  &:focus {
    outline: none;
  }
`;
exports.SButton = styled_components_1.default.button `
  width: 22vw;
  height: 2.5vw;
  max-width: 500px;

  color: #f5f5f5;

  margin: 1.5vw 0vw 1vw 0vw;
  padding: 1.5vw 1.5vw;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #ad2d14 0%, #f42e07 100%);

  border: 1px solid #fe2e05;
  border-radius: 100px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vw;

  &:hover {
    cursor: pointer;
  }
`;
exports.SDivError = styled_components_1.default.div `
  margin-top: 10px;
  color: ${defaultVariables_1.theme.colors.textError};
  display: flex;
`;
//# sourceMappingURL=Form.style.js.map