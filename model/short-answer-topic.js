'use strict';

var Topic = require('./topic');

function ShortAnswerTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

ShortAnswerTopic.prototype = Object.create(Topic.prototype);
ShortAnswerTopic.prototype.constructor = ShortAnswerTopic;

ShortAnswerTopic.prototype.calculationScore = function (element) {
    return 0;
};

ShortAnswerTopic.prototype.formatValue = function (element) {
    this.value = element;
};

module.exports = ShortAnswerTopic;
