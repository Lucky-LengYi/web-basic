'use strict';

var TopicHelper = require('../helper/topic-helper');
var IndexViewModel = require('../view-models/index');

function IndexController(argument) {

}

IndexController.prototype.index = function(req, res) {
    var topicHelper = new TopicHelper();

    topicHelper.getTopic(function (topics) {
        var viewModel = new IndexViewModel(topics);
        console.log(topics[3].options);
        res.render('index', viewModel);
    });
}

IndexController.prototype.submit = function(req, res) {

    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopic();

    var answerSheet = req.body;
    topicHelper.marker(answerSheet, topics);
    topicHelper.setInputs(answerSheet, topics);

    var viewModel = new IndexViewModel(topics, answerSheet);

    res.render('index', viewModel);
}

module.exports = IndexController;
