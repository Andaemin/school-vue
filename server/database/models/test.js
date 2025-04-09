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
    });

    connection.sync({
        alter: true,
    });
}

module.exports = define;
