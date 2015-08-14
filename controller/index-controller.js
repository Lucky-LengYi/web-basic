'use strict';

var loadAllQuestion = require('../config/fixtures');
var initialData = require('../seeds/initial-data');
var TopicHelper = require('../helper/topic-helper');

function IndexController(argument) {

}

function renderIndexPage(req, res, data) {
    res.render('index', data);
}

IndexController.index = function(req, res) {

    var topicHelper = new TopicHelper();
    var topic = topicHelper.getTopic();
    
    data = helperTopic.classify(data);

    renderIndexPage(req, res, {
        userData: initialData,
        data: data
    });
}

IndexController.submit = function(req, res) {
    var data = loadAllQuestion();
    var userData = req.body;
    var helperTopic = new HelperTopic();

    helperTopic.fractionalStatistics(userData,data);
    helperTopic.gatValue(userData,data);

    data = helperTopic.classify(data);

    renderIndexPage(req, res, {
        userData: userData,
        data:data
    });
}

module.exports = IndexController;
