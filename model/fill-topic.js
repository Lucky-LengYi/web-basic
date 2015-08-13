var Topic = require('./topic');

function FillTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

FillTopic.prototype = Object.create(Topic.prototype);
FillTopic.prototype.constructor = FillTopic;

FillTopic.prototype.calculationScore = function () {

};

module.exports = FillTopic;
