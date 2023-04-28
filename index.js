const express = require('express');
const app = express();

//index를 생략해도 알아서 index파일을 가져옴 (./api/user/index.js)
const user = require('./api/user');

// users 루트로 들어오는 모든 요청은 user 모듈이 담당한다.
app.use('/users', user);


const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}\)`);
})