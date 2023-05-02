"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SImgBG = exports.SImgLogo = exports.SDivTexts = exports.SSection = exports.SBody = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SBody = styled_components_1.default.div `
  background: linear-gradient(180deg, #2e2f36 0%, #17181c 100%);
  display: flex;
  font-family: "Poppins", sans-serif;
`;
exports.SSection = styled_components_1.default.section `
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
exports.SDivTexts = styled_components_1.default.div `
  text-align: left;
`;
exports.SImgLogo = styled_components_1.default.img `
  position: absolute;
  max-width: 500px;
`;
exports.SImgBG = styled_components_1.default.img `
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  width: 100%;
`;
//# sourceMappingURL=Body.style.js.map