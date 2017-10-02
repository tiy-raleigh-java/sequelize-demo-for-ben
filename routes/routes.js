const express = require('express');
const routes = express.Router();

// this file contains all the routes for this example application

/**
 * The homepage
 * @type {String}
 */
routes.get('/', (req, res) => {
  // count how many listings we have
  return res.render('home');
});

module.exports = routes;
