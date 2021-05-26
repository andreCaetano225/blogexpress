const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");


const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article)// hasmany = tem muito, então categorias tem muitos artigos!

Article.belongsTo(Category); // belongsTo signofica que pertece no caso artigo pertence a Category
// forma de relacionamento 1 para 1 = belongsto


module.exports = Article;