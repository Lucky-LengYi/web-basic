var _ = require('lodash');
var initialData = require('../seeds/initial-data');

function rederIndexPage(req, res, data) {
    res.render('index', data);
}

function getIndexInfo(req,res) {
    rederIndexPage(req,res,{
        data : initialData
    });
}

function getScore(req,res) {
    console.log(req.body);
    rederIndexPage(req,res);
}

module.exports = {
    getIndexInfo: getIndexInfo,
    getScore: getScore
};