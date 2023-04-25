const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;

    const  newUser = new User({
        username,
        useremail,
        userpassword
    });

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;

