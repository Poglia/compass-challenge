import { Request, Response } from 'express';
const { getUsersDB } = require('../useCases/userUseCases');

const getUsers = async (request: Request, response: Response): Promise<void> => {
  try {
    const data = await getUsersDB();
    response.status(200).json(data);
  } catch (err) {
    response.status(400).json({
      status: 'error',
      message: 'Erro ao consultar os Users: ' + err
    });
  }
};

export { getUsers };