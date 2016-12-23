'use strict';

/******************* INIT DEPENDENCIES *********************/

let path = require('path');

/********************** MAIN ROUTES ************************/

const routesMain = (app) => {

  const mainMessage = (req, res) => {
    res.send({ message: 'This is an API service for Smoulder Tunes' });
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
