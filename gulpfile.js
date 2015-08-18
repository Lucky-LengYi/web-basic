var gulp = require('gulp');
var config = require('./config/database');
var execsql = require('execsql');

gulp.task('dbinit', function () {
    dbConfig = {
        host: 'localhost',
        user: 'root',
        password: 'root'
    },
    sqlFile = __dirname + '/seeds/dbinit.sql';

    var conn = execsql.config(dbConfig);

    conn.execFile(sqlFile, function(err, results){
        console.log(results);
        conn.end();
    });
});
