const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const getConnection = require('../../connection/database');

router.get('/', function (req, res) {

    getConnection((conn) => {
        
        conn.query('SELECT * FROM USER_TABLE', function (error, results, fields) {
            console.log(results);
            res.send(results)
            
            conn.release();

            
            if (error) throw error;
        });

    });

});


//router 객체를 모듈화
module.exports = router;