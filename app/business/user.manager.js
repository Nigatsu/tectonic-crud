'use strict';

import { assign, omit } from 'lodash';
import { encodePassword, comparePasswords } from '../services/security';
import * as userDAO from '../DAO/user.dao';

function create(context) {
  return encodePassword(context.password).then(key => {
    return userDAO.create(assign(context, key));
  })
}

function getOne(id) {
  return userDAO.getById(id).then(user => omit(user, ['password', 'salt']));
}

function getAll() {
  return userDAO.getAll().then(data => {
      return data.map(user => omit(user, ['password', 'salt']))
  });
}

function update(context, id) {
  return userDAO.getById(id)
    .then(user => comparePasswords(context.oldPassword, user.password))
    .then(() => encodePassword(context.newPassword))
    .then(key => userDAO.update(assign(omit(context, ['oldPassword', 'newPassword']), key), id))
    .then(user => omit(user, ['password', 'salt']));
}

function remove(id) {
  return userDAO.remove(id);
}

export { create, getOne, getAll, update, remove }
