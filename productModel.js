const connection = require('../db');

const createProduct = (product, callback) => {
  const { name, price, description } = product;
  const query = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
  connection.query(query, [name, price, description], callback);
};

const getProducts = (callback) => {
  const query = 'SELECT * FROM products';
  connection.query(query, callback);
};

const updateProduct = (id, product, callback) => {
  const { name, price, description } = product;
  const query = 'UPDATE products SET name=?, price=?, description=? WHERE id=?';
  connection.query(query, [name, price, description, id], callback);
};

const deleteProduct = (id, callback) => {
  const query = 'DELETE FROM products WHERE id=?';
  connection.query(query, [id], callback);
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
};


