const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'similarProducts',
});

const parseData = (object) => {
  const keys = ['url', 'name', 'rating', 'reviews', 'price', 'is_prime', 'similar_to'];
  keys.forEach((key) => {
    if (object[key]) {
      object[key] = JSON.parse(object[key]);
    }
  });
  return object;
};

const getProduct = (productId, callback) => {
  connection.query(`select * from products where id=${productId}`, (err, results) => {
    if (err) console.error(err);
    callback(results);
  });
};


const getRelated = (productId, callback) => {
  connection.query(
    `select * from products where similarTo = ${productId};`,
    (err, results) => {
      if (err) console.error(err);
      callback(results);
    },
  );
};

const getAll = (productId, callback) => {
  const storage = {};
  getProduct(productId, (results) => {
    storage.data = parseData(results[0]);
    getRelated(productId, (relatedResults) => {
      storage.related = relatedResults.map(object => parseData(object));
      callback(storage);
    });
  });
};

// NEW crud functions

const addProduct = ({url, name, rating, reviews, price, is_prime,  similar_to}, callback) => {
  connection.query(
    `INSERT INTO products (url, name, rating, reviews, price, is_prime, similar_to)
     VALUES ("${url}", "${name}", "${rating}", "${reviews}", "${price}", ${is_prime}, "${similar_to}")`,
    (err, results) => {
      if (err) console.error(err);
      callback(results);
    },
  );
};

const updateProduct = (productId, url, name, rating, reviews, price, is_prime,  similar_to, callback) => {
  connection.query(
    `UPDATE products SET url="${url}", name="${name}", rating="${rating}", reviews="${reviews}",
		 price="${price}", is_prime=${is_prime}, similar_to="${similar_to}" 
		 WHERE id=${productId}`, (err, results) => {
      if (err) {
        console.error(err);
      }
      callback(results);
    },
  );
};

const deleteProduct = (productId, callback) => {
  connection.query(`DELETE FROM products where id=${productId}`, (err, results) => {
    if (err) console.error(err);
    callback(results);
  });
};

module.exports = {
  getProduct,
  getRelated,
  getAll,
  addProduct,
  updateProduct,
  deleteProduct,
};
