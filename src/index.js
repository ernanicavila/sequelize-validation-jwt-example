require('dotenv').config();

const express = require('express');
const { userController } = require('./controller');
const { validateJWT, validateUser } = require('./middlewares/validateJWT');

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.get('/', validateJWT, validateUser, userController.getAll);
app.get('/:id', validateJWT, validateUser, userController.getById);
app.post('/login', userController.Login);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
