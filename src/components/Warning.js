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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const defaultVariables_1 = require("../styles/defaultVariables");
const Text_style_1 = require("../styles/Text.style");
const Form_style_1 = require("../styles/Form.style");
const AppContext_1 = __importDefault(require("../AppContext"));
function Warning() {
    const [heightDiv, setHeightDiv] = (0, react_1.useState)(0);
    const { errorMessage } = (0, react_1.useContext)(AppContext_1.default);
    const sizeObject = Object.keys(errorMessage).length;
    (0, react_1.useEffect)(() => {
        setHeightDiv(sizeObject !== 0 ? sizeObject + "vw" : 0);
    });
    return (react_1.default.createElement(Form_style_1.SDivError, { style: { height: heightDiv } }, errorMessage.map((message) => (react_1.default.createElement(Text_style_1.SP2, { style: { color: defaultVariables_1.theme.colors.textError } }, message)))));
}
exports.default = Warning;
//# sourceMappingURL=Warning.js.map