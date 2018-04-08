'use strict';

import Joi from 'joi';

export default {
  create: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      avatar: Joi.string().optional()
    }
  },
  update: {
    body: {
      name: Joi.string().optional(),
      email: Joi.string().email().optional(),
      password: Joi.string().optional(),
      avatar: Joi.string().optional()
    }
  }
};
