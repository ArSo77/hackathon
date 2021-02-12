const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const User = require('../models/user');

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


exports.getAllPupilsByTrainer = (req, res) => {
  User.findById()
    .then((user) => {

    })
}

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
