var Topic = require('./topic');

function MultipleChoiceTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);
MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.calculationScore = function () {

};

module.exports = MultipleChoiceTopic;
