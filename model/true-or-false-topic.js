var Topic = require('./topic');

function TrueOrFalseTopic(name, question, options, answer, score, type, value) {
    Topic.call(this, name, question, options, answer, score, type, value);
}

TrueOrFalseTopic.prototype = Object.create(Topic.prototype);
TrueOrFalseTopic.prototype.constructor = SingleChoice;

TrueOrFalseTopic.prototype.calculationScore = function () {

};

module.exports = TrueOrFalseTopic;
