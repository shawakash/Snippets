const routes = require('express').Router();
const postRouter = require('./post')
const logger = require('../middleware/logger')
const authRouter = require('./auth');

routes.use('/auth', authRouter);
routes.use('/post', postRouter);

module.exports = routes; 