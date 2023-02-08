var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 정규식 관련 테스트 controller */
router.get('/regex', function(req, res, next) {
  const helloRegex =  new RegExp('^hello$', 'g')

  let json = `
    {
      "'hello'.match(new RegExp('^hello$', 'g'))": "${'hello'.match(helloRegex)}",
      "'hello'.matchAll(new RegExp('^hello$', 'g'))": "${JSON.stringify('hello'.matchAll(helloRegex))}",
      "Array(...'hello'.matchAll(new RegExp('^hello$', 'g')))": "${Array(...'hello'.matchAll(helloRegex))}"
    }
  `

  res.send(json)
  // res.send('hello')
})


module.exports = router;
