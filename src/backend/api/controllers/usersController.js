"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const { getUsersDB } = require('../useCases/userUseCases');
const getUsers = async (request, response) => {
    try {
        const data = await getUsersDB();
        response.status(200).json(data);
    }
    catch (err) {
        response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os Users: ' + err
        });
    }
};
exports.getUsers = getUsers;
