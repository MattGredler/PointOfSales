const express = require('express');
const router = express.Router();
// const Note = require('../models/Note');


const Item = require('../../models/cart')

module.exports = function (app) {

  app.get('/api/cart', function (req, res) {
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

  app.post('/api/cart', function (req, res) {
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
