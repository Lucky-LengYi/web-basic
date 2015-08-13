var loadAllQuestion = require('../config/fixtures');
var initialData = require('../seeds/initial-data');

function rederIndexPage(req, res, data) {
    res.render('index', data);
}

function getIndexInfo(req, res) {
    var data = loadAllQuestion();
    console.log(data);
    rederIndexPage(req, res, {
        userData: initialData,
        data: data
    });
}

function getScore(req, res) {
    var userData = req.body;
    rederIndexPage(req, res, {
        userData: userData
    });
}

module.exports = {
    getIndexInfo: getIndexInfo,
    getScore: getScore
};
