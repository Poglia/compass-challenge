"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const getPostsDB = async () => {
    const dir = __dirname.substring(0, __dirname.lastIndexOf("\\"));
    try {
        const fileContent = await fs_1.default.promises.readFile(dir + "/data.json", 'utf8');
        const data = JSON.parse(fileContent);
        return data.posts;
    }
    catch (err) {
        throw "Erro: no User USECASE " + err;
    }
};
module.exports = { getPostsDB };
