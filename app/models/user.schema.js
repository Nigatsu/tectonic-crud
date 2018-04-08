'use strict';

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  avatar: { type: String },
  password: { type: String },
  salt: { type: String }
});

mongoose.model('User', UserSchema, 'user');
