const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load profile model
const Profile = require('../../models/Profile');

//load user model
const User = require('../../models/User');

// @route GET api/profile/test
// @desc Test profile route
// @access Public

router.get('/test', (req,res) =>  res.json({ msj: 'Posts Works'}));


// @route GET api/profile
// @desc get current user profile
// @access Private

router.post('/', passport.authenticate('jwt',  { session: false}),
    (req, res) => {
    const errors = {};

    Profile.findOne({
        user: req.user.id
    }).then(profile => {
        if (!profile)  {
            errors.noprofile = 'There is no profile for this user';
            return res.json(errors)
}
    res.json(profile);
    }).catch (err => res.json(404).json(err))
    });




module.exports = router;
