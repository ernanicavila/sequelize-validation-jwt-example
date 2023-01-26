require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'seucreison';
const { loginUser } = require('../services');

const validateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(404).json({ message: 'Authorization token not found' });

  try {
    // const decode = jwt.decode(token, secret);

    req.user = jwt.decode(token, secret).data;
  } catch (error) {
    return res.status(403).json({ type: 'deu ruim', message: error.message });
  }
  return next();
};

const validateUser = async (req, res, next) => {
  const retornoUser = await loginUser(req.user);
  if (!retornoUser) { return res.status(404).json({ message: 'Usuario ou senha invalido' }); }

  const { password, ...resto } = retornoUser.dataValues;

  req.user = resto;
  return next();
};

module.exports = {
  validateJWT,
  validateUser,
};
