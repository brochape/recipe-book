import React from 'react';
import "./recipesOverview.scss"
import RecipeCard from "../recipe-card/recipeCard";
import RecipeLoader from "../../services/recipeLoader";


const RecipesOverview = () => {
  let recipes = RecipeLoader.loadRecipes();
  return (
    <div className="grid-container">
      {
        recipes.map(recipe =>
          <RecipeCard recipe={recipe} key={recipe.id}/>
        )
      }
    </div>
  );
};

export default RecipesOverview;