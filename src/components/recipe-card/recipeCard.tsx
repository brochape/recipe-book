import React from 'react';
import Recipe from "../../models/recipe";
import {useHistory} from "react-router-dom";
import "./recipeCard.scss"

interface RecipeProps {
  recipe: Recipe
}

const RecipeCard = ({recipe}: RecipeProps) => {
  let history = useHistory();
  function handleClick(recipeId: number) {
    history.push("/recipe/" + recipeId);
  }
  return (
    <div onClick={() => handleClick(recipe.id)} className={"recipeCard"}>
      <img src={recipe.image} alt={"Recipe"}  width={200} height={200}/>
      <h2>{recipe.name}</h2>
    </div>
  );
};

export default RecipeCard;