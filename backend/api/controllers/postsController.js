const { getPostsDB } = require('../useCases/postUseCases');

const getPosts = async (request, response) => {
  await getPostsDB()
        .then(data => response.status(200).json(data))
        .catch(err => {
          response.status(400).json({
              status : 'error',
              message : 'Erro ao consultar os Users: ' + err
          })
        })
}

module.exports = { getPosts}