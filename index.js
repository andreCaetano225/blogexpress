const express = require("express"); 
const app = express();
const connection = require("./database/database");
const categoriesController = require("./categories/CategoreisController");
const articlesController = require("./articles/ArticlesController")

const Article = require("./articles/Article");
const Category = require("./categories/Category");

app.set('view engine', 'ejs'); // Serve para o ejs/ qualquer html funcionar!

app.use(express.urlencoded({extended: false}));// Serve para trabalhar com formularios
app.use(express.json());

app.use(express.static('public')); // Arquivos estaticos como CSS/ JS PARTE FRONT E MUITOS MAIS


connection //Conexão com banco de datos !
.authenticate()
.then (()=>{
    console.log ("Deu certo")
}). catch((error) =>{
    console.log(error)
})

app.use("/", categoriesController); // usado para importar a rota! de categoria

app.use("/", articlesController); // usado para importar a rota ! de artigoes!

app.get("/", (req,res) => {
    res.render("index");
})

// Porta onde vai rodar no caso do meu LOCALHOST!
app.listen(3000, () =>{
    console.log("rodando!") 
})