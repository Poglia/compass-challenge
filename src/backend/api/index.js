"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = require('./routes/routes');
const app = (0, express_1.default)();
const door = 3002;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(routes);
app.listen(process.env.PORT || door, () => {
    console.log('Servidor da API rodando na porta ' + door);
});
//# sourceMappingURL=index.js.map