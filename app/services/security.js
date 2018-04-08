'use strict';

import * as bcrypt from 'bcrypt';
const CustomError = require('../services/CustomError');

const saltRounds = 10;

function encodePassword(password) {
  let newSalt;
  return bcrypt.genSalt(saltRounds).then(salt => {
    newSalt = salt;
    return bcrypt.hash(password, salt);
  }).then(hash => {
      return {
        password: hash,
        salt: newSalt
      }
  })
}

function comparePasswords(password, dbPassword) {
  return bcrypt.compare(password, dbPassword).then((isMatch) => {
    if (!isMatch) {
      throw new CustomError('Incorrect password!', 404);
    }
  });
}

function authorizer(req, res, next) {
  if ('Bearer 123456789' === req.headers.authorization) {
    return next();
  }
  res.sendStatus(401);
}

export { encodePassword, comparePasswords, authorizer }
