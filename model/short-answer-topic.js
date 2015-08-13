var Topic = require('./topic');

function ShortAnswerTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

ShortAnswerTopic.prototype = Object.create(Topic.prototype);
ShortAnswerTopic.prototype.constructor = ShortAnswerTopic;

ShortAnswerTopic.prototype.calculationScore = function () {

};

module.exports = ShortAnswerTopic;
