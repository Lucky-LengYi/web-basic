'use strict';

var data = require('../seeds/data');
var TopicFactory = require('../model/topic-factory');
var _ = require('lodash');
var mysql = require('mysql');
var config = require('../config/config');

function getConnection() {
    return mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    });
}

function TopicHelper() {

}

TopicHelper.prototype.getTopic = function () {
    var topic = [];
    var conn = getConnection();

    conn.connect();

    var selectQuestionSql = 'select * from question'
    conn.query(selectQuestionSql, function(err, rows) {

    });

    conn.end();
    var topicFactory = new TopicFactory();

    data.data.forEach(function (item) {
        topic.push(topicFactory.create(item[0],item[1],item[2],item[3],item[4],item[5],item[6]));
    });

    return topic;
}

TopicHelper.prototype.setInputs = function (answerSheet, topics) {
    topics.forEach(function (item) {

        if (answerSheet[item.name] !== undefined) {

            if (!Array.isArray(answerSheet[item.name])) {
                item.addValue(answerSheet[item.name].split(' '));
            }else {
                item.addValue(answerSheet[item.name]);
            }

        }
    });
};

TopicHelper.prototype.marker = function (answerSheet, topics) {
    var score = 0;

    topics.forEach(function (item) {
        if (answerSheet[item.name] !== undefined) {
            var temp = answerSheet[item.name].toString();
            score += item.mark(temp);
        }
    });

    answerSheet.score = score;
};

module.exports = TopicHelper;
