const express = require("express");
const Category = require("./Category");
const router = express.Router();
const slugify = require("slugify")



router.get("/admin/categories/new", (req,res) => {
    res.render("admin/categories/new");
})

// salvando no banco de dados
router.post("/categories/save",(req,res) =>{
    var title = req.body.title;
    if(title != undefined){

    Category.create({
        title: title,
        slug: slugify(title)
    }).then(() =>{
        res.redirect("/");
    })

    }else{
        res.redirect("/admin/categories/new"); // tranforma "Compu inform" em "compu-inform"
    }
})

router.get("/admin/categories", (req,res) =>{

    Category.findAll().then(categories => {
        res.render("admin/categories/index", {categories: categories});

    })
});

router.post("/categories/delete", (req,res) =>{
    var id = req.body.id;

    if(id != undefined){
        if(!isNaN(id)){

            Category.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/categories");
            });

        }else{
            res.redirect("/admin/categories");
        }

    }else{
        res.redirect("/admin/categories");
    }
})

module.exports = router;