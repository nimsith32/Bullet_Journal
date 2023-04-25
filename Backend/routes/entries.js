const router = require('express').Router();
let Entry = require('../models/entry.model');

router.route('/').get((req, res) => {
    Entry.find()
       .then(entries => res.json(entries))
       .catch(err => res.status(400).json("Error" + err))
});

router.route('/add').post((req, res) =>{
    const useremail = req.body.useremail;
    const journaltitle = req.body.journaltitle;
    const journaldate = Date.parse(req.body.journaldate);
    const journalentry = req.body.journalentry;

    const newEntry = new Entry({
        useremail,
        journaltitle,
        journaldate,
        journalentry
    });

    newEntry.save()
        .then(() => res.json('Journal Entry Added!'))
        .catch(err => res.status(400).json('Error '+ err))

});

router.route('/:id').get((req, res) => {
    Entry.findById(req.params.id)
        .then(entry => res.json(entry))
        .catch(err => res.status(400).json('Error'+err));
});

router.route('/:id').delete((req, res) =>{
    Entry.findByIdAndDelete(req.params.id)
        .then(() => res.json('Entry Deleted'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Entry.findById(req.params.id)
        .then(entry => {
            entry.useremail = req.body.useremail;
            entry.journaltitle = req.body.journaltitle;
            entry.journaldate = Date.parse(req.body.journaldate);
            entry.journalentry = req.body.journalentry;

            entry.save()
                .then(() => res.json('Entry Updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;