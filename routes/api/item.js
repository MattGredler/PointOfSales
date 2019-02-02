const express = require('express');
const router = express.Router();
// const Note = require('../models/Note');


const Item = require('../../models/cartItems')

module.exports = function (app) {

  app.get('/api/item', function (req, res) {
    Item.find({})
      // .then(function (data) {
      //   res.json(data);
      // })
      .then(data => res.json(data))
      // .catch(function (err) {
      //   res.json(err);
      // });
      .catch(err => res.json(err))
  });

  app.post('/api/item', function (req, res) {
    Item.create(req.body)
      // .then(function (data) {
      //   res.json(data);
      // })
      .then(data => res.json(data))
      // .catch(function (err) {
      //   res.json(err);
        .catch(err => res.json(err))
      });
    }
