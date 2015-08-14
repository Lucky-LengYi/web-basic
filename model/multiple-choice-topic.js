'use strict';

var Topic = require('./topic');

function MultipleChoiceTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);
MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.calculationScore = function (element) {
    var temp = element.toString();
    var judge = temp.length === this.answer.toString().length;

    this.answer.forEach(function (item) {
        if (temp.indexOf(item) === -1) {
            judge = false;
        }
    });

    if (judge) {
        return this.score;
    }else {
        return 0;
    }
};

MultipleChoiceTopic.prototype.formatValue = function (element) {
    if (!Array.isArray(element)) {
        element = element.split(' ');
    }
    this.value = element;
};

module.exports = MultipleChoiceTopic;
