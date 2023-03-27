const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors')

const sequelize = require('./util/database')

const app = express();

const adminRoutes  = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/',adminRoutes)

sequelize
.sync()
.then(() => {
    app.listen(3000)
})
.catch(err => console.log(err))