const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
    Todo.find()
       .then(todos => res.json(todos))
       .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {
    const useremail = req.body.useremail;
    const todotitle = req.body.todotitle;

    const newTodo = new Todo({
        useremail,
        todotitle
    });

    newTodo.save()
        .then(() => res.json("Todo Added!"))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) =>{
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo Deleted'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            todo.useremail = req.body.useremail;
            todo.eventtitle = req.body.todotitle;

            todo.save()
                .then(() => res.json('Todo Updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;
