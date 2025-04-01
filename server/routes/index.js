var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */

router.get('/', function(req, res, next){
    res.render('index', { title : 'daeminExpress'});
});

router.get('/imgDownload', function(req, res, next) {
  const imgPath = path.join(__dirname, "../public/images/VueLogo.png")
  const img = fs.readFileSync(imgPath)
// 이유는 모르지만 에러남. 파일 다운은 잘됨. 콘솔에 이슈 없다고뜸.;
  console.log(`이미지 경로확인 : ${imgPath}`)
  res.setHeader("Content-Disposition", "attachment;filename=test.png")
  res.end(img)
});

router.get('/userjson', function(req, res, next){
    const userjson = [
        {
            name : "nayeon",
            age : 25,
        },
        {
            name : 'dahyeon',
            age : 23,
        }
    ]
    res.json(userjson)
})

module.exports = router;
