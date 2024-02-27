const router = require('express').Router()
const {addProducts,getProducts} = require('../controller/productController')
const log = require('../middleware/middleware')

router.get('/products',getProducts);
router.post('/products',log,addProducts);
  


module.exports=router;