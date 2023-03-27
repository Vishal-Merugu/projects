const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router()

router.post('/',adminController.postProduct)

router.get('/',adminController.getProducts);

router.delete('/:productId',adminController.deleteProduct)

module.exports = router;