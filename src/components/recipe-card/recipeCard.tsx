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
  const imageStyle = {
    background:"url(\"" + recipe.image +"\")",
    backgroundSize: "cover",
    gridArea: "image",
  };
  return (
    <div onClick={() => handleClick(recipe.id)} className={"recipeCard"}>
      <div className={"card-image"} style={imageStyle}/>
      <div className={"card-text"}>
        <h2>{recipe.name}</h2>
      </div>
    </div>
  );
};

export default RecipeCard;