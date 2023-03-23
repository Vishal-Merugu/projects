const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.post('/',expenseController.postExpense);

router.get('/',expenseController.getExpenses);

router.delete('/:expenseId',expenseController.deleteExpense);

router.get('/:expenseId',expenseController.getExpense);

router.put('/:expenseId',expenseController.editExpense)

module.exports = router;