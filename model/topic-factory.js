'use strict';

var FillTopic = require('./fill-topic');
var MultipleChoiceTopic = require('./multiple-choice-topic');
var ShortAnswerTopic = require('./short-answer-topic');
var SingleChoiceTopic = require('./single-choice-topic');
var TrueOrFalseTopic = require('./true-or-false-topic');
var data = require('../seeds/data.json');
var Utils = require('../lib/utils');

function TopicFactory() {

}

TopicFactory.prototype.create = function (name, question, options, answer, score, type, value) {
    var topic;

    if (type === "Fill") {
        topic = new FillTopic(name, question, answer, score, value);

        options.forEach(function (option) {
            topic.addOption(option.title,option.val);
        })
    }else if (type === "SingleChoice") {
        topic = new SingleChoiceTopic(name, question, answer, score, value);

        options.forEach(function (option) {
            topic.addOption(option.title,option.val);
        })
    }else if (type === "MultipleChoice") {
        topic = new MultipleChoiceTopic(name, question, answer, score, value);

        options.forEach(function (option) {
            topic.addOption(option.title,option.val);
        })
    }else if (type === "TrueOrFalse") {
        topic = new TrueOrFalseTopic(name, question, answer, score, value);

        options.forEach(function (option) {
            topic.addOption(option.title,option.val);
        })
    }else if (type === "ShortAnswer") {
        topic = new ShortAnswerTopic(name, question, answer, score, value);

        options.forEach(function (option) {
            topic.addOption(option.title,option.val);
        })
    }
    return topic;
};

module.exports = TopicFactory;
