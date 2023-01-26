const { User } = require('../models');

const getAll = async () => User.findAll();
const getById = async (id) => User.findByPk(id);
const loginUser = async ({ email, password }) => User.findOne({ where: { email, password } });
const createUser = async ({ email, password }) => User.create({ email, password });

module.exports = {
  getAll,
  getById,
  loginUser,
  createUser,
};
