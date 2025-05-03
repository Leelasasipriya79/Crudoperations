
const updateProduct = (req, res) => {
    productModel.updateProduct(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: 'Product updated' });
    });
  };
  
  const deleteProduct = (req, res) => {
    productModel.deleteProduct(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: 'Product deleted' });
    });
  };
  
  module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
  };
  