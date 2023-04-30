import fs from 'fs';

const getUsersDB = async () => {
  const dir = __dirname.substring(0, __dirname.lastIndexOf("\\"));

  try {
    const fileContent = await fs.promises.readFile(dir + "/data.json", 'utf8');
    const data = JSON.parse(fileContent);
    return data.users;
  } catch(err) {
    // eslint-disable-next-line no-throw-literal
    throw "Erro: no User USECASE " + err;
  }
}

module.exports = { getUsersDB};
