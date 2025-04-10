const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a res");
});

router.post("/api/join", async function (req, res) {
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
