var Topic = require('./topic');

function SingleChoiceTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

SingleChoiceTopic.prototype = Object.create(Topic.prototype);
SingleChoiceTopic.prototype.constructor = SingleChoiceTopic;

SingleChoiceTopic.prototype.calculationScore = function (element) {
    var result = 0;
    if (element === this.answer) {
        result = this.score;
    }
    return result;
};

SingleChoiceTopic.prototype.formatValue = function (element) {
    this.value = element;
};

module.exports = SingleChoiceTopic;
