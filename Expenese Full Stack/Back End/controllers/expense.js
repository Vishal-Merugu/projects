const Expense = require('../models/expense');

exports.postExpense = (req,res,next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    Expense.create({
        amount : amount,
        description : description,
        category : category
    })
    .then((expense) => res.send(expense))
    .catch(err => console.log(err))
}

exports.getExpenses = (req,res,next) => {
    Expense.findAll()
    .then(expenses => {
        res.json(expenses)
    })
    .catch(err => console.log(err))
}

exports.deleteExpense = (req,res,next) => {
    const expenseId = req.params.expenseId;
    Expense.findByPk(expenseId)
    .then((expense) => {
        return expense.destroy()
    })
    .catch(err => console.log(err))
}

exports.getExpense = (req,res,next) => {
    const expenseId = req.params.expenseId;
    Expense.findByPk(expenseId)
    .then((expense) =>{
        res.json(expense)
    })
    .catch(err =>console.log(err))
}

exports.editExpense = (req,res,next) => {
    const expenseId = req.params.expenseId;
    const updatedAmount = req.body.amount;
    const updatedDescription = req.body.description;
    const updatedCategory = req.body.category;
    Expense.findByPk(expenseId)
    .then((expense) => {
        expense.amount = updatedAmount;
        expense.description = updatedDescription;
        expense.category = updatedCategory;
        return expense.save()
    })
    .then(expense => res.json(expense))
    .catch(err => console.log(err))
}