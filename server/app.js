const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const connection = new Sequelize("mycollege", "root", "mhee7173", {
    host: "localhost",
    dialect: "mysql",
});
const options = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mhee7173",
    database: "mycollege",
};
const sessionStore = new MySQLStore(options);

const define = require("./database/models/test");
define(connection);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
        key: "login_session_id", // 꼭 스네이크 케이스여야 하는가?
        secret: "nayeon", // 솔트
        store: sessionStore, // 전역관리인가?
        resave: false,
        saveUninitialized: false,
    })
);
app.use("/", indexRouter);
app.use("/api/users", usersRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
