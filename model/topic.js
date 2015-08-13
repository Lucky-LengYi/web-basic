function Topic(name, question, options, answer, score, type, value) {
    this.name = name;
    this.question = question;
    this.options = options;
    this.answer = answer;
    this.score = score;
    this.type = type;
    this.value = value;
}

Topic.prototype.calculationScore = function () {
    
};

module.exports = Topic;
