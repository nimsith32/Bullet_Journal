const router = require('express').Router();
let Transaction = require('../models/transaction.model');

router.route('/').get((req, res) => {
    Transaction.find()
      .then(transactions => res.json(transactions))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const useremail = req.body.useremail;
    const transactiontitle = req.body.transactiontitle;
    const transactionamount = Number(req.body.transactionamount);
    const transactionmonth = req.body.transactionmonth;
    const transactiontype = req.body.transactiontype;

    const  newTransaction = new Transaction({
        useremail,
        transactiontitle,
        transactionamount,
        transactionmonth,
        transactiontype
    });

    newTransaction.save()
        .then(() => res.json('Transaction Log Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) =>{
    Transaction.findByIdAndDelete(req.params.id)
        .then(() => res.json('Transaction Deleted'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => {
            transaction.useremail = req.body.useremail;
            transaction.transactiontitle = req.body.transactiontitle;
            transaction.transactionamount= Number(req.body.transactionamount);
            transaction.transactionmonth= req.body.transactionmonth;
            transaction.transactiontype= req.body.transactiontype;

            transaction.save()
                .then(() => res.json('Transaction Updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});


module.exports = router;

