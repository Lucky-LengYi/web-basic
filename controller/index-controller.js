var loadAllQuestion = require('../config/fixtures');
var initialData = require('../seeds/initial-data');
var HelperTopic = require('../helper/helper-topic');

function rederIndexPage(req, res, data) {
    res.render('index', data);
}

function getIndexInfo(req, res) {
    var data = loadAllQuestion();
    var helperTopic = new HelperTopic();
    data = helperTopic.classify(data);

    rederIndexPage(req, res, {
        userData: initialData,
        data: data
    });
}

function getScore(req, res) {
    var userData = req.body;
    var data = loadAllQuestion();
    var helperTopic = new HelperTopic();
    data = helperTopic.classify(data);
    
    rederIndexPage(req, res, {
        userData: userData,
        data:data
    });
}

module.exports = {
    getIndexInfo: getIndexInfo,
    getScore: getScore
};
