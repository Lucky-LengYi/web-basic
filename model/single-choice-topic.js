var Topic = require('./topic');

function SingleChoiceTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

SingleChoiceTopic.prototype = Object.create(Topic.prototype);
SingleChoiceTopic.prototype.constructor = SingleChoiceTopic;

SingleChoiceTopic.prototype.calculationScore = function () {

};

module.exports = SingleChoiceTopic;
