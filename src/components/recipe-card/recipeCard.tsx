import React from 'react';
import Recipe from "../../models/recipe";

interface RecipeProps {
  recipe: Recipe
}

const RecipeCard = ({recipe}: RecipeProps) => {
  return (
    <div>
      <img src={recipe.image} alt={"Recipe"}  width={200} height={200}/>
      <h2>{recipe.name}</h2>
    </div>
  );
};

export default RecipeCard;