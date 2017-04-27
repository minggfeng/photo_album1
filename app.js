const express = require('express');
const db = require('./server/db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

app.sql = {
  get: function(callback) {
    var queryStr = 'select * from photos;';
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  },

  post: function(params, callback) {
    console.log(params);
    var queryStr = `insert into photos (title, url, rating) value ('${params.title}','${params.url}','${params.rating}');`;
    db.query(queryStr, params, (err, results) => {
      callback(err, results);
    });
  }
}

app.photos = app.sql.get((err, results) => {
  if (err) {
    console.log(err);
  } else {
    return results;
  }
})

app.get('/', (req, res) => {
  console.log('asdf');
  app.sql.get((err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/', (req, res) => {
  console.log(typeof req.body)
  app.sql.post(req.body, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(201).send(data);
    }
  })
})

app.listen(3000, () => {
  console.log('Photos app listening on port 3000!');
})

module.exports = app;


