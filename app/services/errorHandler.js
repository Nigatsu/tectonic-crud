'use strict';

function send(error, res) {
  if (error.name === 'MongoError') {
    res.sendStatus(500);
  } else {
    res.status(error.status).send({ error: error.message });
  }
}

export { send }
