'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('../auth/middleware/basic.js');
const Users = require('../auth/models/users-model.js');

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup usernmae=john password=foo


function createSignIn(req, res, next) {
    console.log(req.user); // {username: password}
    console.log('we made it');
    res.status(200).json({ user: req.user});
}

async function createSignUp(req,res) {
    
    try {
      const user = new Users(req.body);
      const record = await user.save(req.body);
      res.status(201).json(record);
    } catch (e) { res.status(403).send("Error Creating User"); }
}

router.post('/signup', createSignUp);
router.post('/signin', basicAuth, createSignIn);


module.exports = router;