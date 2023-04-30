import { Request, Response } from 'express';
const { getPostsDB } = require('../useCases/postUseCases');

const getPosts = async (request: Request, response: Response): Promise<void> => {
  try {
    const data = await getPostsDB();
    response.status(200).json(data);
  } catch (err) {
    response.status(400).json({
      status: 'error',
      message: 'Erro ao consultar os Users: ' + err
    });
  }
};

export { getPosts };