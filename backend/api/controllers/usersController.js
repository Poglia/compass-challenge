const { getUsersDB} = require('../useCases/userUseCases');

const getUsers = async (request, response) => {
    await getUsersDB()
          .then(data => response.status(200).json(data))
          .catch(err => {
            response.status(400).json({
                status : 'error',
                message : 'Erro ao consultar os Users: ' + err
            })
          })
}

module.exports = { getUsers}