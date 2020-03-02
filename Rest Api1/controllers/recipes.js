const { prisma } = require("../prisma/generated/prisma-client");
const fragment = `
fragment RecipesWithIngredient on Recipes {
  id
  name
  description
  imgUrl
  ingredients {
      id
      name
      amount
  }
}
`;

exports.getRecipes = (req, res, next) => {
  prisma
    .recipeses()
    .$fragment(fragment)
    .then(recipeses => {
      res.status(200).json(recipeses);
    })
    .catch(error => {
      res.status(204).json({ Error: error, message: "No Content Found" });
    });
};

exports.createRecipe = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const imgUrl = req.body.imgUrl;
  const ingredient = req.body.ingredient;
  prisma
    .createRecipes({
      name: name,
      description: description,
      imgUrl: imgUrl,
      ingredients: {
        create: ingredient
      }
    })
    .$fragment(fragment)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      res.status(404).json(err);
    });
};
