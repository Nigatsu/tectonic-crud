'use strict';

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  avatar: { type: String },
  password: { type: String, required: true },
  salt: { type: String, required: true }
});

mongoose.model('User', UserSchema, 'user');
