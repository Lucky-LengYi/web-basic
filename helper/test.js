var mysql = require('mysql');
var config = require('../config/database');
var async = require('async');
var _ = require('lodash');

function getConnection() {
    return mysql.createConnection({
      host     : config.host,
      user     : config.user,
      password : config.password,
      database : config.database
    });
}

async.waterfall([
    function(callback) {
        var conn = getConnection();
        conn.connect();

        var selectQuestionSql = 'select * from question';
        var questions = [];

        conn.query(selectQuestionSql, function(err, rows) {
            rows.forEach(function (item) {
                temp = item;
                temp.answer = temp.answer.split(' ');
                questions.push(temp);
            });
            callback(null, questions);
        });

        conn.end();
    },

    function(questions,callback) {
        var conn = getConnection();
        conn.connect();

        var selectOptionSql = 'select * from options';
        conn.query(selectOptionSql, function(err, rows) {
            var options = _.groupBy(rows,function (item) {
                return item.question_id;
            });
            
            questions.forEach(function (item) {
                item.options = options[item.id.toString()];
            })
            console.log(questions);
            callback(null, questions);
        });
        conn.end();
    }
], function(err, result) {
    // result now equals 'done'
});
HomeController.prototype.index = function (req, res) {

  var paperDataHelper = new PaperDataHelper();
  var data = paperDataHelper.getPaperData(function(data){

    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopics(data);
    var homeViewModel = new HomeViewModel(topics);
    res.render('index', homeViewModel);

  });


};


PaperDataHelper.prototype.getPaperData = function(callback) {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        user: 'root',
        password: '123456',
        database: 'TWWebBasic'
    });

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected');
    });

    var topics = [];

    var select = 'SELECT topics.*,ops.item,ops.title FROM topics LEFT JOIN options ops ON topics.topicId = ops.itemId';
    connection.query(select, function(err, rows) {
        topics = rows;

        var option = [];
        var formatTopics = [];

        for (var i = 0; i < topics.length; i++) {
            if (option[topics[i].topicId]) {
                option[topics[i].topicId].push({
                    item: topics[i].item,
                    describe: topics[i].title
                });
            } else {
                option[topics[i].topicId] = [];
                option[topics[i].topicId].push({
                    item: topics[i].item,
                    describe: topics[i].title
                });
            }
            formatTopics[topics[i].topicId - 1] = {
                type: topics[i].type,
                name: topics[i].name,
                question: topics[i].questions,
                answer: topics[i].answer.split(' '),
                score: topics[i].score,
                options: option[topics[i].topicId]
            };
        }
        callback(formatTopics);
    });



};
