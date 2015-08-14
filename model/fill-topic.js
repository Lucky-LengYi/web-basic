'use strict';

var Topic = require('./topic');

function FillTopic(name, question, answer, score, value) {
    Topic.call(this, name, question, answer, score, value);
}

FillTopic.prototype = Object.create(Topic.prototype);
FillTopic.prototype.constructor = FillTopic;

FillTopic.prototype.mark = function (element) {
    var result = 0;
    var score = this.score;
    this.answer.forEach(function (item) {
        if (element.indexOf(item) !== -1) {
            result += score;
        }
    });
    return result;
};

FillTopic.prototype.formatValue = function (element) {
    if (!Array.isArray(element)) {
        element = element.split(' ');
    }
    this.value = element;
};

module.exports = FillTopic;
