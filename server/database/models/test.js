const { Sequelize } = require("sequelize");

function define(connection) {
    global.Article = connection.define("article", {
        no: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true, // 알아서 no 지정해서 넣어줌.
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING(2000),
        },
        body: {
            type: Sequelize.TEXT("long"),
        },
        writerName: {
            type: Sequelize.STRING,
        },
        writeTime: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        hits: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
    });

    global.User = connection.define("user", {
        id: {
            type: Sequelize.STRING(18),
            primaryKey: true,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(200),
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING(30),
        },
        joinDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    });
    connection.sync({
        alter: true,
    });
}

module.exports = define;
