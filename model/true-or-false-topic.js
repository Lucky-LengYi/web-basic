'use strict';

var Topic = require('./topic');

function TrueOrFalseTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

TrueOrFalseTopic.prototype = Object.create(Topic.prototype);
TrueOrFalseTopic.prototype.constructor = TrueOrFalseTopic;

TrueOrFalseTopic.prototype.calculationScore = function (element) {
    if (element === this.answer) {
        return this.score;
    }
    return 0;
};

TrueOrFalseTopic.prototype.formatValue = function (element) {
    this.value = element;
};

module.exports = TrueOrFalseTopic;
