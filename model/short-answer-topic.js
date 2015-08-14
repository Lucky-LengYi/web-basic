'use strict';

var Topic = require('./topic');

function ShortAnswerTopic(name, question, answer, score, value) {
    Topic.call(this, name, question, answer, score, value);
}

ShortAnswerTopic.prototype = Object.create(Topic.prototype);
ShortAnswerTopic.prototype.constructor = ShortAnswerTopic;

ShortAnswerTopic.prototype.mark = function (element) {
    return 0;
};

ShortAnswerTopic.prototype.formatValue = function (element) {
    this.value = element;
};

module.exports = ShortAnswerTopic;
