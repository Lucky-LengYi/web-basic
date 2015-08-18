'use strict';

var Topic = require('./topic');

function SingleChoiceTopic(name, question, answer, score, value) {
    Topic.call(this, name, question, answer, score, value);
}

SingleChoiceTopic.prototype = Object.create(Topic.prototype);
SingleChoiceTopic.prototype.constructor = SingleChoiceTopic;

SingleChoiceTopic.prototype.mark = function (element) {
    return element === this.answer.toString() ? this.score : 0;
};

SingleChoiceTopic.prototype.formatValue = function (element) {
    this.value = element;
};

module.exports = SingleChoiceTopic;
