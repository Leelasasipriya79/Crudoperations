const connection = require('./db');

const product = {
  id: 3, 
  name: 'vivo', 
  price: 7900.90, 
  description: 'This is Vivo mobile'
};

const query = 'INSERT INTO products (id, name, price, description) VALUES (?, ?, ?, ?)';

connection.query(query, [product.id, product.name, product.price, product.description], (err, results) => {
  if (err) {
    console.error('❌ Error inserting product:', err.message);
    process.exit(1); 
  }
  console.log(`✅ Product inserted with ID: ${product.id}`);
  process.exit(0); 
});




