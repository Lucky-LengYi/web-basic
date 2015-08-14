'use strict';

var data = require('../seeds/data');
var TopicFactory = require('../model/topic-factory');
var _ = require('lodash');


function TopicHelper() {

}

TopicHelper.prototype.getTopic = function () {
    var topic = [];

    var topicFactory = new TopicFactory();

    data.data.forEach(function (item) {
        result.push(topicFactory.createInstance(item[0],item[1],item[2],item[3],item[4],item[5],item[6]));
    });

    return topic;
}

TopicHelper.prototype.classify = function (collection) {
    return _.groupBy(collection, function(item) {
        return item.type;
    });
};

TopicHelper.prototype.gatValue = function (userData,data) {
    data.forEach(function (item) {
        if (userData[item.name] !== undefined) {
            item.formatValue(userData[item.name]);
        }
    });
};

TopicHelper.prototype.fractionalStatistics = function (userData,data) {
    var score = 0;
    data.forEach(function (item) {
        if (userData[item.name] !== undefined) {
            score += item.calculationScore(userData[item.name]);
        }
    });
    userData.score = score;
};

module.exports = TopicHelper;
