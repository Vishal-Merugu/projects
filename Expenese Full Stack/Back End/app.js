const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const sequelize = require('./util/database');

const app = express();

const expenseRoutes = require('./routes/expense');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/expenses',expenseRoutes)

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => console.log(err))