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

  app.get('/media', (req, res) => {

    console.log('received request');
    let name = req.query.name;
    res.sendFile(path.join(__dirname, '../assets/music', name + '.mp3'));

  });

};

module.exports = {
  main: routesMain,
  api: routesAPI,
  serve: routesServe
}
