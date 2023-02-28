var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('acercade', { title: 'Acerca de nosotros' });
});

module.exports = router;
