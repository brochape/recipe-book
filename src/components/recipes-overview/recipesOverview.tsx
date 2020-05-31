import React, {useEffect} from 'react';
import "./recipesOverview.scss"
import RecipeCard from "../recipe-card/recipeCard";
import RecipeLoader from "../../services/recipeLoader";
import headerHelper from "../header/headerHelper";
import Recipe from "../../models/recipe";


const RecipesOverview = () => {
  let recipes = RecipeLoader.loadRecipes();
  useEffect(() => headerHelper.makeActive("Recipes"));
  return (
    <div className="grid-container">
      {
        recipes.map(recipe =>
          <RecipeCard recipe={recipe as Recipe} key={recipe.id}/>
        )
      }
    </div>
  );
};

export default RecipesOverview;