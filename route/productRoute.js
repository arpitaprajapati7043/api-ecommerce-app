const express=require('express');
const router = express.Router();
const ProductCreateController=require('../controller/ProductCreateController');
const productController=require('../controller/productController');

router.post('/products', ProductCreateController.createProduct)
router.get('/products', productController.getAllProducts);
//  router.get('/products/:id', productController.getProductById);

//  router.put('/products/:id', productController.updateProductById);
//  router.delete('/products/:id', productController.deleteProductById);

module.exports=router;