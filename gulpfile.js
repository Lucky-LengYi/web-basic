var gulp = require('gulp');
var config = require('./config/database');
var execsql = require('execsql');
var nodemon = require('nodemon');
var exec = require('child_process').exec;

var path = ['./controller/*', './config/*', './helper/*', './model/*', './router/*','./view-models/*','./lib/*','./*.js'];

gulp.task('dbinit', function () {
    dbConfig = {
        host: 'localhost',
        user: 'root',
        password: 'root'
    },
    sqlFile = __dirname + '/seeds/dbinit.sql';
    var conn = execsql.config(dbConfig);
    conn.execFile(sqlFile, function(err, results){
        console.log('error :' + err);
        conn.end();
    });
});

gulp.task('start', function() {
    exec('node app.js');
});

gulp.task('default', function() {
    gulp.start('start');
    gulp.watch(path, ['start']);
});
