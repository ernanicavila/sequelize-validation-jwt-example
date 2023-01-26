const jwt = require('jsonwebtoken');
const userService = require('../services');

const secret = process.env.SECRET || 'seucreison';

require('dotenv/config');

const isBodyValid = (email, password) => email && password;

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  return res.status(200).json(user);
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res
        .status(401)
        .json({ message: 'É necessário usuário e senha para fazer o Login' });
    }
    const user = await userService.loginUser({ email, password });
    if (!user || user.password !== password) { return res.status(401).json({ message: 'Usuário ou senha inválida' }); }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const tokenn = jwt.sign({ data: { email, password } }, secret, jwtConfig);

    return res.status(200).json({ access_token: tokenn });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  Login,
};
