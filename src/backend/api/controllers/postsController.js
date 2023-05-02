"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = void 0;
const { getPostsDB } = require('../useCases/postUseCases');
const getPosts = async (request, response) => {
    try {
        const data = await getPostsDB();
        response.status(200).json(data);
    }
    catch (err) {
        response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os Users: ' + err
        });
    }
};
exports.getPosts = getPosts;
//# sourceMappingURL=postsController.js.map