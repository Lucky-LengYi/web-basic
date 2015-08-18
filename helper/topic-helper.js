'use strict';

var data = require('../seeds/data');
var TopicFactory = require('../model/topic-factory');
var _ = require('lodash');
var mysql = require('mysql');
var config = require('../config/database');
var async = require('async');

function getConnection() {
    return mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database
    });
}

function loadAllQuestion(callBack) {

    async.waterfall([
        function(callback) {
            var conn = getConnection();
            var questions = [];
            var selectQuestionSql = 'select * from question';

            conn.connect();
            conn.query(selectQuestionSql, function(err, rows) {
                rows.forEach(function(item) {
                    var temp = item;
                    temp.answer = temp.answer.split(' ');
                    temp.value = [];
                    questions.push(temp);
                });
                callback(null, questions);
            });

            conn.end();
        },

        function(questions, callback) {
            var conn = getConnection();
            conn.connect();

            var selectOptionSql = 'select * from options';
            conn.query(selectOptionSql, function(err, rows) {
                var options = _.groupBy(rows, function(item) {
                    return item.question_id;
                });

                questions.forEach(function(item) {
                    item.options = options[item.id.toString()];
                })
                callback(null, questions);
            });

            conn.end();
        }
    ], function(err, result) {
        callBack(result);
    });
}

function TopicHelper() {

}

TopicHelper.prototype.getTopic = function(callback) {
    var conn = getConnection();
    var topicFactory = new TopicFactory();
    loadAllQuestion(function(topics) {
        var topic = [];
        topics.forEach(function(item) {
            topic.push(topicFactory.create(item.name, item.question, item.options, item.answer, item.score, item.classes, item.value));
        });
        callback(topic);
    });

}

TopicHelper.prototype.setInputs = function(answerSheet, topics) {
    topics.forEach(function(item) {

        if (answerSheet[item.name] !== undefined) {

            if (!Array.isArray(answerSheet[item.name])) {
                item.addValue(answerSheet[item.name].split(' '));
            } else {
                item.addValue(answerSheet[item.name]);
            }

        }
    });
};

TopicHelper.prototype.marker = function(answerSheet, topics) {
    var score = 0;

    topics.forEach(function(item) {
        if (answerSheet[item.name] !== undefined) {
            var temp = answerSheet[item.name].toString();
            score += item.mark(temp);
        }
    });

    answerSheet.score = score;
};

module.exports = TopicHelper;
