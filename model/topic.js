'use strict';

var Option = require('./option')

function Topic(name, question, answer, score, value) {
    this.name = name;
    this.question = question;
    this.answer = answer;
    this.score = score;
    this.options = [];
    this.value = value;
}

Topic.prototype.addOption = function (key, val) {
    this.options.push(new Option(key, val));
};

Topic.prototype.addValue = function (value) {
    this.value = value;
};

Topic.prototype.mark = function () {

};

module.exports = Topic;
