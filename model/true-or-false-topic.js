'use strict';

var Topic = require('./topic');

function TrueOrFalseTopic(name, question, answer, score, value) {
    Topic.call(this, name, question, answer, score, value);
}

TrueOrFalseTopic.prototype = Object.create(Topic.prototype);
TrueOrFalseTopic.prototype.constructor = TrueOrFalseTopic;

TrueOrFalseTopic.prototype.mark = function (element) {
    return element === this.answer.toString() ? this.score : 0;
};

TrueOrFalseTopic.prototype.formatValue = function (element) {
    this.value = element;
};

module.exports = TrueOrFalseTopic;
