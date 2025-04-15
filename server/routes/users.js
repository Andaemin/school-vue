const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { where } = require("sequelize");

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("유저 api 테스트용.");
});

router.post("/join", async function (req, res) {
    const user = req.body;
    const checkUser = await User.findOne({
        where: {
            id: user.id,
        },
    });
    if (checkUser) {
        console.log(test);
        res.json({
            success: false,
            message: "이미 가입된 회원입니다.",
        });
        return;
    }
    await User.create(user);
    res.json({
        success: true,
    });
});
module.exports = router;

// todo list 한다
