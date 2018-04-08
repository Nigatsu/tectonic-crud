'use strict';

import * as bcrypt from 'bcrypt';

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

function authorizer(req, res, next) {
  if ('Bearer 123456789' === req.headers.authorization) {
    return next();
  }
  res.sendStatus(401);
}

export { encodePassword, authorizer }
