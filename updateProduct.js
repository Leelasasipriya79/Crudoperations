const connection = require('../db'); 
const updatedProduct = {
  id: 6,
  name: 'Poco', 
  price: 8500.50, 
  description: 'This is an updated Poco mobile'
};
const updateQuery = 'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?';

connection.query(updateQuery, [updatedProduct.name, updatedProduct.price, updatedProduct.description, updatedProduct.id], (err, results) => {
  if (err) {
    console.error('❌ Error updating product:', err.message);
    process.exit(1); 
  }

  console.log(`✅ Product with ID ${updatedProduct.id} updated successfully`);
  const retrieveQuery = 'SELECT * FROM products WHERE id = ?';
  connection.query(retrieveQuery, [updatedProduct.id], (err, results) => {
    if (err) {
      console.error('❌ Error retrieving product:', err.message);
      process.exit(1);
    }

    if (results.length > 0) {
      console.log(`✅ Retrieved Product:`, results[0]);
    } else {
      console.log(`❌ No product found with ID ${updatedProduct.id}`);
    }

    process.exit(0); 
  });
});





