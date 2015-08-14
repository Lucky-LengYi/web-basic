'use strict';

var express = require('express');
var router = express.Router();
var IndexController = require('../../controller/index-controller');

var indexController = new IndexController();

router.get('/',indexController.index);
router.post('/',indexController.submit);

module.exports = router;
