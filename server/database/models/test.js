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

    global.User = connection.define("User", {
        id: {
            // 하단 alter : true . 해도 탸앱 여전히 int임.
            type: Sequelize.STRING(30),
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
    global.Category = connection.define(
        "Category",
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            createdAt: false,
            // don't generate an "updatedAt" attribute
            updatedAt: false,
        }
    );
    User.hasMany(Article, {
        // sequalize의 association은 카멜케이스만 사용 가능.
        as: "articles",
        foreignKey: "writerId",
    });
    // belongsTo : 여기서는 Article의 하나의 유저 (누구인지는 뭐 내가 정하는거고)
    Article.belongsTo(User, {
        as: "writer",
        foreignKey: "writerId",
    });

    Article.belongsToMany(Category, {
        as: "catagory",
        through: "ArticleCategory",
    });

    Category.belongsToMany(Article, {
        as: "articles",
        through: "ArticleCategory",
    });

    connection.sync({
        alter: true,
        // ⚠️ force 사용 x : 데이터 한번 다 날아갔음.
    });
}

module.exports = define;
