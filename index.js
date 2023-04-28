const express = require('express');
const app = express();

const mysql = require('mysql');
const dbconfig = require('./connection/config');
const pool = mysql.createPool(dbconfig)


function poolConnection(callback) {
    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        callback(err, connection)
    });
}

// // Use the connection
// connection.query('SELECT * FROM USER_TABLE', function (error, results, fields) {
//     console.log(results);
//     // When done with the connection, release it.
//     connection.release();

//     // Handle error after the release.
//     if (error) throw error;

//     // Don't use the connection here, it has been returned to the pool.
// });




//index를 생략해도 알아서 index파일을 가져옴 (./api/user/index.js)
const user = require('./api/user');

// users 루트로 들어오는 모든 요청은 user 모듈이 담당한다.
app.use('/users', user);


const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}\)`);
})

//Conection
module.exports = {poolConnection}