var FillTopic = require('./fill-topic');
var MultipleChoiceTopic = require('./multiple-choice-topic');
var ShortAnswerTopic = require('./short-answer-topic');
var SingleChoiceTopic = require('./single-choice-topic');
var TrueOrFalseTopic = require('./true-or-false-topic');
var data = require('../seeds/data.json');

function TopicFactory() {

}

TopicFactory.prototype.createInstance = function (name, question, options, answer, score, type, value) {
    if (type === "Fill") {
        return new FillTopic(name, question, options, answer, score, type, value);
    }
    if (type === "SingleChoice") {
        return new SingleChoiceTopic(name, question, options, answer, score, type, value);
    }
    if (type === "MultipleChoice") {
        return new MultipleChoiceTopic(name, question, options, answer, score, type, value);
    }
    if (type === "TrueOrFalse") {
        return new TrueOrFalseTopic(name, question, options, answer, score, type, value);
    }
    if (type === "ShortAnswer") {
        return new ShortAnswerTopic(name, question, options, answer, score, type, value);
    }
};

module.exports = TopicFactory;
