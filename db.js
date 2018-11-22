var mysql = require('mysql');
var db;

var connection = {
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: '',
    database: ''
};

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(connection);

        db.connect(function (err) {
            if (!err) {
                console.log('Database is connected!');
            } else {
                console.log(err);
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();