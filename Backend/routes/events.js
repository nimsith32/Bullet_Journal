const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
   Event.find()
     .then(events => res.json(events)) 
     .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req,res) => {
    const useremail = req.body.useremail;
    const eventtitle = req.body.eventtitle;
    const eventstart = Date.parse(req.body.eventstart);
    const eventend = Date.parse(req.body.eventend);
    const eventcat = req.body.eventcat;

    const newEvent = new Event({
        useremail,
        eventtitle,
        eventstart, 
        eventend,
        eventcat
    });

    newEvent.save()
        .then(() => res.json('Event Added'))
        .catch(err => res.status(400).json('Error '+ err));
});

router.route('/:id').get((req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) =>{
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json('Event Deleted'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event.useremail = req.body.useremail;
            event.eventtitle = req.body.eventtitle;
            event.eventstart = Date.parse(req.body.eventstart);
            event.eventsend = Date.parse(req.body.eventend);
            event.eventcat = req.body.eventcat;

            event.save()
                .then(() => res.json('Event Updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});


module.exports = router;