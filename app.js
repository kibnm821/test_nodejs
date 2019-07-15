const express = require('express')
const app = express()
const port = 3000

//정적파일을 동적으로 움직이게한다.
app.use(express.static('public'))
//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/external', function (req, res) {
res.sendFile(path.join(__dirname + '/views/external.html'));
});

router.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/project/index.html'));
});

router.get('/stylesheet1', function (req, res) {
    res.sendFile(path.join(__dirname + '/project/stylesheet1.html'));
});

router.get('/stylesheet2', function (req, res) {
    res.sendFile(path.join(__dirname + '/project/stylesheet2.html'));
});

router.get('/stylesheet3', function (req, res) {
    res.sendFile(path.join(__dirname + '/project/stylesheet2.html'));
});

router.get('/stylesheet3', function (req, res) {
    res.sendFile(path.join(__dirname + '/project/stylesheet3.html'));
});

router.get('/stylesheet4', function (req, res) {
    res.sendFile(path.join(__dirname + '/project/stylesheet4.html'));
});

router.get('/Nostylesheet', function (req, res) {
    res.sendFile(path.join(__dirname + '/project/Nostylesheet.html'));
});

router.get('/subview', function (req, res) {
res.sendFile(path.join(__dirname + '/views/subview.html'));
//__dirname : It will resolve to your project folder.
});

app.use('/', router);