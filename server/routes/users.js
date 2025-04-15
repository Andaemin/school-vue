const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { where } = require("sequelize");

router.post("/join", async function (req, res) {
    const user = req.body;
    const checkUser = await User.findOne({
        where: {
            id: user.id,
        },
    });
    if (checkUser) {
        console.log(checkUser);
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

router.post("/login", async function (req, res) {
    const user = req.body;
    const findUser = await User.findOne({
        where: {
            id: user.id,
            password: user.password,
        },
    });
    if (!findUser) {
        res.json({
            success: false,
            message: " ID 혹은 패스워드를 확인.",
        });
        return;
    }

    res.json({
        success: true,
        user: findUser,
    });
});
module.exports = router;

// todo list 한다
