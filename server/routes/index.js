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
        title: "Twice",
        writerName: "Yimnayeon",
        body: "Yimnayeon nayeonayeon! ",
    };
    const article = await Article.create(tester);
    console.log(article);
    res.json({
        success: true,
        tester: article,
    });
});

// api 나중에 알아서 좀 분리할것.
// 확인용 get 요청 하고, jade에 대충 경로 박아넣기.
// 디렉토리 정리좀.

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
    // console.log(req.body);
    // console.log(req.session);
    const user = await User.findOne({
        where: {
            id: req.session.user.id,
        },
    });
    try {
        const article = await Article.create(req.body);
        const categorys = req.body.categorys || [];
        for (let i = 0; i < categorys.length; i++) {
            let category = await Category.findOne({
                where: {
                    id: categorys[i],
                },
            });
            // 5.12 GPT 돌림,..
            await article.addCategory(category);
        }
        await article.setWriter(user);
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

router.get("/api/postdata/:no", async function (req, res) {
    const number = req.params.no;
    const article = await Article.findOne({
        where: {
            no: number,
        },
    });
    article.hits++;
    await article.save();
    res.json({
        success: true,
        article: article,
    });
});

//중간 끊기

router.post("/api/postdata", async function (req, res) {
    console.log("🛰 받은 데이터:", req.body.page);
    const page = req.body.page;
    if (!page) {
        page = 1;
    }
    const offset = (page - 1) * 10;
    const postList = await Article.findAll({
        include: [
            {
                model: User,
                as: "writer",
                attributes: ["name", "id"],
                // exclude : ["password"]
            },
            {
                model: Category,
                as: "category",
            },
        ],
        order: [["no", "ASC"]],
        // 💡 order 는 무조건 배열로 반환.
        // 사용법 : 컬럼명 , 정렬방향
        // DESC - 내림차순, ASC - 오름차순,
        limit: 10, //SQL 그 limit 맞음.
        offset: offset, //test
    });
    const count = await Article.count();
    res.json({
        success: true,
        list: postList,
        count: count,
    });
});

router.delete("/api/postdata/:no", async function (req, res) {
    const no = req.params.no;
    await Article.destroy({
        where: {
            no: no,
        },
    });
    res.json({
        success: true,
        message: "삭제됨.",
    });
});

router.post("/api/postdata/update", async function (req, res) {
    const updatePost = req.body;
    await Article.update(
        {
            title: updatePost.title,
            body: updatePost.body,
            writerName: updatePost.writerName,
        },
        {
            where: {
                no: updatePost.no,
            },
        }
    );
    res.json({
        success: true,
        message: "수정됨.",
    });
});

router.post("/api/categorylist/list", async function (req, res) {
    const categoryList = await Category.findAll();
    res.json({
        success: true,
        categoryList: categoryList,
    });
});
router.delete("/api/category/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await Category.destroy({ where: { id } });
        res.json({ success: true, message: "카테고리 삭제됨" });
    } catch (err) {
        console.error("카테고리 삭제 오류:", err);
        res.status(500).json({ success: false, message: "삭제 실패" });
    }
});

module.exports = router;
