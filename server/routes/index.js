var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  const imgPath = path.join(__dirname, "Vuelogo.png")

  res.render('index', { title: 'Daemin_express' });
});

module.exports = router;
