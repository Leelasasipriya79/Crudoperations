const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./productController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); 

app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.post('/products', productController.createProduct);
app.get('/products', productController.getProducts);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
