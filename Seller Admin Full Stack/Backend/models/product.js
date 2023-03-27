const {Sequelize} = require('sequelize')

const sequelize = require('../util/database')

const Product = sequelize.define('product',{
    id : {
        type : Sequelize.INTEGER,
        allowNull  : false,
        primaryKey : true,
        autoIncrement : true
    },
    product:{
        type : Sequelize.STRING,
        allowNull  : false
    },
    category : {
        type : Sequelize.STRING,
        allowNull  : false
    },
    price : {
        type : Sequelize.STRING,
        allowNull  : false
    }
})

module.exports = Product