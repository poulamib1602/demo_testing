const { Router } = require('express');
const User = require('../database/schema/user');
const { hashPassword, comparePassword } = require('../helper');
const logger = require('../module/logger');

async function loginUser(request, response) {
    const { email, password } = request.body;
    if (!email || !password) {
      logger.warn(`Invalid login attempt for user: ${email}`);
      return response.send(400);
    }
    const userDB = await User.findOne({ email });
    if (!userDB) {
      logger.warn(`Invalid login attempt for user: ${userDB}`);
      return response.send(401);
    }
    const isValid = comparePassword(password, userDB.password);
    if (isValid) {
      request.session.user = userDB;
      logger.info(`User logged in: ${isValid}`);
      return response.send(200);
    } else {
      logger.warn(`Invalid login attempt for user: ${userDB}`);
      return response.send(401);
    }
  }

async function registerUser(request, response) {
    {
        const { email } = request.body;
        const userDB = await User.findOne({ email });
        if (userDB) {
          logger.info(`User exists: ${username}`);
          response.status(400).send({ msg: 'User already exists!' });
        } else {
          const password = hashPassword(request.body.password);
          console.log(password);
          const newUser = await User.create({ username, password, email });
          logger.info(`User registered: ${newUser}`);
          response.send(201);
        }
      }
  }

module.exports = {registerUser,loginUser}
