const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true, index: true
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    image: {
        type: String
    }

});

var recipe = mongoose.model(
    'recipe',
    recipeSchema
);

module.exports = recipe;