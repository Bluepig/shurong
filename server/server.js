const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const fs = require('fs');

const _ = require('lodash');

const MongoClient = require('mongodb').MongoClient;

// Pooling Connection
// --------------------
const dbURI = 'mongodb://localhost:27017',
  dbName = 'myDB'; // NOTE: Change this;

MongoClient.connect(dbURI, {useNewUrlParser: true}, (err, conn) => {
  if (err) throw err;

  // Express App Object and Settings
  // -------------------------------
  let app = express();
  // request parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // static
  app.use(express.static(path.join(__dirname, 'build')));

  // homepage
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  // Router
  // ------------------------------
  let apiRoot = express.Router();
  app.use('/api', apiRoot);

  // TEMP: api test
  apiRoot.route('/data')
    .get((req, res, next) => {
      res.json({data: 'Hello Word!'});
    })




  // Launch
  // ------------------------------
  // app.listen(process.env.PORT || 8080);
  app.listen(5000);

});
