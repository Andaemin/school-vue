const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { where } = require("sequelize");

router.get("/", function (req, res, next) {
    res.render("index", { title: "daeminExpress" });
});

router.get("/imgDownload", function (req, res, next) {
    const imgPath = path.join(__dirname, "../public/images/VueLogo.png");
    const img = fs.readFileSync(imgPath);
    // 이유는 모르지만 에러남. 파일 다운은 잘됨. 콘솔에 이슈 없다고뜸.;
    console.log(`이미지 경로확인 : ${imgPath}`);
    res.setHeader("Content-Disposition", "attachment;filename=test.png");
    res.end(img);
});

router.get("/userjson", function (req, res, next) {
    const userjson = [
        {
            name: "nayeon",
            age: 25,
        },
        {
            name: "dahyeon",
            age: 23,
        },
    ];
    res.json(userjson);
});

router.get("/postest", async function (req, res) {
    const tester = {
        title: "test",
        writerName: "안대민",
        body: "daemin post test",
    };
    const article = await Article.create(tester);
    console.log(article);
    res.json({
        success: true,
        tester: article,
    });
});

// post 나중에 알아서 좀 분리할것.
// 확인용 get 요청 하고, jade에 대충 경로 박아넣기.

// 학교용 (교수님 코드)
// router.post("/api/board", async function (req, res) {
//     console.log(req.body);
//     const article = await Article.create(req.body);
//     res.json({
//         success: true,
//         article: article,
//     });
// });

//젖같아서 확인해보는용
router.post("/api/board", async function (req, res) {
    console.log(req.body);

    try {
        const article = await Article.create(req.body);
        res.json({
            success: true,
            article: article,
        });
    } catch (err) {
        console.error(`에러 씨발 : ${err}`);
        res.status(500).json({
            success: false,
            message: "안됨",
        });
    }
});

router.get("/api/article/:no", async function (req, res) {
    const number = req.params.no;
    const article = await Article.findOne({
        where: {
            no: number,
        },
    });
    res.json({
        success: true,
        article: article,
    });
});

module.exports = router;
