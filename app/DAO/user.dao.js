'use strict';

import mongoose from 'mongoose';
import * as mongoConverter from './mongoConverter';

const CustomError = require('../services/CustomError');
const User = mongoose.model('User');

function create(user) {
  const newUser = new User(user);
  return newUser.save().then(data => mongoConverter.fromMongo(data)).catch(() => {
    throw new CustomError('Can\'t register new user!', 409);
  });
}

function getById(id) {
  return User.findById(id).then(data => mongoConverter.fromMongo(data)).catch(() => {
    throw new CustomError('User not found!', 404);
  })
}

function getAll() {
  return User.find().then(data => {
      return data.map(user => mongoConverter.fromMongo(user));
  }).catch(() => {
    throw new CustomError('Can\'t get list of users!', 409);
  })
}

function update(user, id) {
  return User.findOneAndUpdate({_id: id}, user).then(data => mongoConverter.fromMongo(data)).catch(() => {
    throw new CustomError('Can\'t modify user!', 409);
  })
}

function remove(id) {
  return User.findOneAndRemove({_id: id}).catch(() => {
    throw new CustomError('User not found!', 404);
  });
}

export { create, getById, getAll, update, remove };
