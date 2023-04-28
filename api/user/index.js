const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
    res.send("user request success");
});


//router 객체를 모듈화
module.exports = router;