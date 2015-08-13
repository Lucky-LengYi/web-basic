var Topic = require('./topic');

function FillTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

FillTopic.prototype = Object.create(Topic.prototype);
FillTopic.prototype.constructor = FillTopic;

FillTopic.prototype.calculationScore = function (element) {
    var result = 0;
    var temp = element.toString();
    var score = this.score;
    this.answer.forEach(function (item) {
        if (temp.indexOf(item) !== -1) {
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
