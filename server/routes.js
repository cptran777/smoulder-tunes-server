'use strict';

/******************* INIT DEPENDENCIES *********************/

let path = require('path');
let request = require('request');

/********************** MAIN ROUTES ************************/

const routesMain = (app) => {

  const mainMessage = (req, res) => {
    res.send({ message: 'This is an API service for Pocketmon Dex' });
  };

  app.get('/', mainMessage);

  app.get('/api', mainMessage);

};

/*********************** API ROUTES ************************/

const routesAPI = (app) => {

};

const routesServe = (app) => {

};

module.exports = {
  main: routesMain,
  api: routesAPI,
  serve: routesServe
}
