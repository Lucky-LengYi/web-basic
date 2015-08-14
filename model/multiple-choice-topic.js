'use strict';

var Topic = require('./topic');

function MultipleChoiceTopic(name, question, answer, score, value) {
    Topic.call(this, name, question, answer, score, value);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);
MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.mark = function (element) {
    var isSame = element.length === this.answer.toString().length;

    console.log(element,this.answer);
    this.answer.forEach(function (item) {
        if (element.indexOf(item) === -1) {
            isSame = false;
        }
    });
    console.log(isSame);
    return isSame ? this.score : 0;
};

MultipleChoiceTopic.prototype.formatValue = function (element) {
    if (!Array.isArray(element)) {
        element = element.split(' ');
    }
    this.value = element;
};

module.exports = MultipleChoiceTopic;
