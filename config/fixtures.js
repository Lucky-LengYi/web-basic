var data = require('../seeds/data');
var TopicFactory = require('../model/topic-factory');
var _ = require('lodash');

function loadAllQuestion() {
    var topicFactory = new TopicFactory();
    var result = [];
    data.data.forEach(function (item) {
        result.push(topicFactory.createInstance(item[0],item[1],item[2],item[3],item[4],item[5],item[6]));
    });
    return _.groupBy(result, function(item) {
        return item.type;
    });
}

module.exports = loadAllQuestion;
