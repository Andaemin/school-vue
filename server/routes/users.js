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
    req.session.user = findUser;

    res.json({
        success: true,
        user: findUser,
    });
});

router.post("/info", async function (req, res) {
    const sessionUser = req.session.user;
    if (!sessionUser) {
        return res.json({
            isLogin: false,
            user: null,
        });
    }

    const user = await User.findOne({
        where: {
            id: sessionUser.id,
        },
    });

    if (!user) {
        return res.json({
            isLogin: false,
            user: null,
        });
    }
    res.json({
        isLogin: true,
        user: user,
    });
});

router.post("/logout", async function (req, res) {
    res.session.destory();
    // res.send(),
});
module.exports = router;

// todo list 한다
