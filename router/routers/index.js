'use strict';

var express = require('express');
var router = express.Router();
var IndexController = require('../../controller/index-controller');

var indexController = new indexController();

router.get('/',indexController.getIndexInfo);
router.post('/',indexController.getScore);

module.exports = router;
