'use strict';

import celebrate from 'celebrate';
import { authorizer } from '../services/security';
import * as userManager from '../business/user.manager'
import * as errorHandler from '../services/errorHandler';
import validation from './validation';

export default (app) => {
  app.post('/api/user', authorizer, celebrate(validation.create), (req, res) => {
    return userManager.create(req.body).then((data) => {
      res.status(200).send(data)
    }).catch(err => errorHandler.send(err, res));
  });

  app.put('/api/user/:id', authorizer, celebrate(validation.update), (req, res) => {
    return userManager.update(req.body, req.params.id).then(data => res.status(200).send(data)).catch(err => errorHandler.send(err, res));
  });

  app.get('/api/user', authorizer, (req, res) => {
    return userManager.getAll().then(data => res.status(200).send(data)).catch(err => errorHandler.send(err, res));
  });

  app.get('/api/user/:id', authorizer, (req, res) => {
    return userManager.getOne(req.params.id).then(data => res.status(200).send(data)).catch(err => errorHandler.send(err, res));
  });
  app.delete('/api/user/:id', authorizer, (req, res) => {
    return userManager.remove(req.params.id).then(() => res.sendStatus(200)).catch(err => errorHandler.send(err, res));
  })
};
