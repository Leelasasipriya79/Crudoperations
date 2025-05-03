const connection = require('./db'); 

const productId = 4; 

const query = 'DELETE FROM products WHERE id = ?';

connection.query(query, [productId], (err, results) => {
  if (err) {
    console.error('❌ Error deleting product:', err.message);
    process.exit(1); 
  }
  
  if (results.affectedRows > 0) {
    console.log(`✅ Product with ID ${productId} deleted successfully.`);
  } else {
    console.log(`❌ No product found with ID ${productId}.`);
  }

  process.exit(0); 
});
