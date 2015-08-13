var _ = require('lodash');

function rederIndexPage(req, res, data) {
    res.render('index', data);
}

function getIndexInfo(req,res) {
    rederIndexPage(req,res);
}

function getScore(req,res) {
    rederIndexPage(req,res);
}

module.exports = {
    getIndexInfo: getIndexInfo,
    getScore: getScore
};
