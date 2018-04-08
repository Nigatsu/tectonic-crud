'use strict';

function fromMongo(element) {
  element._doc.id = element._doc._id;
  delete element._doc._id;
  delete element._doc.__v;
  return element._doc;
}

export { fromMongo }
