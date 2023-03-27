const Product = require('../models/product');

exports.postProduct = (req,res,next) => {
    const product = req.body.product;
    const category = req.body.category;
    const price = req.body.price;
    console.log(product,price,category);
    Product.create({
        product : product,
        category : category,
        price : price
    })
    .then(product => res.json(product))
    .catch(err => console.log(err))
}

exports.getProducts = (req,res,next) => {
    Product.findAll()
   .then (products =>res.json(products))
   .catch(err => console.log(err))
}

exports.deleteProduct = (req,res,next) => {
    const productId = req.params.productId
    Product.findByPk(productId)
    .then(product => {
        product.destroy()
    })
    .catch(err => console.log(err))
}