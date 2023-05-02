"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPLink = exports.SP2 = exports.SP1 = exports.SH3 = exports.SH1 = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const defaultVariables_1 = require("../styles/defaultVariables");
exports.SH1 = styled_components_1.default.h1 `
  color: ${defaultVariables_1.theme.colors.text};
  font-weight: 500;
  font-size: 2.5vw;
`;
exports.SH3 = styled_components_1.default.h3 `
  color: ${defaultVariables_1.theme.colors.text};
  font-weight: 400;
  font-size: 1.5vw;
   margin: 2vw 0 0 1vw
`;
exports.SP1 = styled_components_1.default.p `
  color: ${defaultVariables_1.theme.colors.text};
  font-weight: 400;
  font-size: 0.8vw;
  width: 20vw;
`;
exports.SP2 = styled_components_1.default.p `
  color: ${defaultVariables_1.theme.colors.text};
  font-weight: 400;
  font-size: 0.8vw;
`;
exports.SPLink = styled_components_1.default.span `
  display: inline;
  margin-left: 0.3vw;
  font-weight: 500;
`;
//# sourceMappingURL=Text.style.js.map