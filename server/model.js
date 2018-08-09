const model = require('./model.js');

module.exports = {
  post(req, res) {
    if (req.body) {
      model.addProduct(req.body, results => res.send(results));
    } else {
      res.end();
    }
  },
  get(req, res) {
    if (parseInt(req.params.id, 10)) {
      model.getAll(req.params.id, results => res.send(results));
    } else {
      res.end();
    }
  },
  put(req, res) {
    if (parseInt(req.params.id, 10)) {
      model.updateProduct(req.params.id, req.params.url, req.params.name, req.params.rating,
        req.params.reviews, req.params.price, req.params.is_prime, req.params.similar_to,
        results => res.send(results));
    } else {
      res.end();
    }
  },
  delete(req, res) {
    if (parseInt(req.params.id, 10)) {
      model.deleteProduct(req.params.id, results => res.send(results));
    } else {
      res.end();
    }
  },
};
