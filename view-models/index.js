'use strict';

var FillTopic = require('../model/fill-topic');
var SingleChoiceTopic = require('../model/single-choice-topic');
var MultipleChoiceTopic = require('../model/multiple-choice-topic');
var TrueOrFalseTopic = require('../model/true-or-false-topic');
var ShortAnswerTopic = require('../model/short-answer-topic');

var initialData = {
    "score": 0,
    "stuClass": "",
    "stuId": "",
    "stuName": ""
};

function IndexViewModel(topics,userData) {
    this.topics = topics;
    this.userData = userData || initialData;
}

IndexViewModel.prototype.getFillTopics = function() {
    return this.topics.filter(function(topic) {
        return topic instanceof FillTopic;
    });
};

IndexViewModel.prototype.getSingleChoiceTopics = function() {
    return this.topics.filter(function(topic) {
        return topic instanceof SingleChoiceTopic;
    });
};

IndexViewModel.prototype.getMultipleChoiceTopics = function() {
    return this.topics.filter(function(topic) {
        return topic instanceof MultipleChoiceTopic;
    });
};

IndexViewModel.prototype.getTrueOrFalseTopics = function() {
    return this.topics.filter(function(topic) {
        return topic instanceof TrueOrFalseTopic;
    });
};

IndexViewModel.prototype.getShortAnswerTopics = function() {
    return this.topics.filter(function(topic) {
        return topic instanceof ShortAnswerTopic;
    });
};

module.exports = IndexViewModel;
