const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipes')

router.get('', RecipeController.getRecipes) 
router.post('/new', RecipeController.createRecipe)
// router.get('/:id', RecipeController.getRecipe)
// router.get('/:id/edit', RecipeController.getRecipe)


module.exports = router;
