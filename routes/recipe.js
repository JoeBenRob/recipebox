
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const recipe = require('../models/recipe_model')

//*@route    GET recipe/all
//*@desc     Get all recipes
//*@access   Public
router.get("/all", (req, res) => {

    let errors = {};

    recipe.find({})
        .then(recipes => {
            if (!recipes) {
                errors.noRecipe = "There are no recipes";
                res.status(404).json(errors);
            }
            res.json(recipes);
        })
        .catch(err => res.status(404).json({ noRecipe: "There are no recipes" }));
});

//*@route   GET recipe/recipe
//*@desc    Get all recipes from one name
//*@access  Public
router.get("/recipe", (req, res) => {

    let errors = {};

    recipe.find({ recipes: req.body.recipes })
        .then(recipe => {
            if (!recipe) {
                errors.noRecipe = "There are no recipe";
                res.status(404).json(errors);
            }
            res.json(recipe);
        })
        .catch(err => res.status(404).json({ noRecipe: "There are no recipe" }));
});

//*@route   POST recipe/create
//*@desc    Create an new recipe
//*@access  Public
router.post("/create", (req, res) => {

    const newrecipe = new recipe({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        image: req.body.image
    });
    newrecipe.save().then(res.send('complete'))
        .catch(err => console.log(err));
})

// @route   PUT recipe/update
// @desc    Update first recipe
// @access  Public
router.put("/update", (req, res) => {

    let errors = {};

    const newrecipe = new recipe({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients
    });

    recipe.findOne({ name: req.body.name })
        .then(recipe => {
            if (!recipe) {
                errors.noRecipe = "There are no recipes with this name";
                res.status(404).json(errors);
            }
            recipe.remove().then(() => {
                res.json({ success: true });
            })
                .catch(err =>
                    res.status(404).json({ recipeNotFound: "No recipe found" })
                )
                .then(() => {
                    newrecipe.save().then(res.send('complete'))
                })
                .catch(err => console.log(err));
        })
        .catch(err => res.status(404).json({ noRecipe: "There is no recipe with this name" }));
});


//*@route   DELETE recipe/delete
//*@desc    delete an recipe by name
//*@access  Public
router.delete("/delete", (req, res) => {
    recipe.findOneAndDelete({ '_id': req.body._id }).then(() => {
        res.send('Deleted')
    }).catch(e => res.status(404).json(e));
});


//*@route   DELETE recipe/deleteAll
//*@desc    delete all recipe of a name
//*@access  Public
router.delete("/deleteAll", (req, res) => {

    let errors = {};
    recipe.deleteMany({ 'name': req.body.name })
        .then(() =>
            res.send('complete'));
});


module.exports = router;