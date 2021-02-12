const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');



exports.createUser = (req, res, next) => {

  console.log(`POST :: CREATE NEW USER - {${req.body.name} ${req.body.surname}}`)

  const user = new User({...req.body})



  console.log(user)

  next()

}

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUser = (req, res, next) => {
  User.findById()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};


exports.getPupils = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (authHeader) {
    let token = authHeader.split(' ')[1];
    let decodedToken = jwt.verify(token, 'secretjwt');
    User.findById(decodedToken.userId)
      .then((user) => {
        User.find({ '_id': { $in: user.pupils } }).then((users) => {
          res.send(users)
        })
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.status(404)
    res.send("Brak podopiecznych")
  }





}
