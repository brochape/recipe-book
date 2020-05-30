import React from 'react';
import Recipe from "../../models/recipe";

interface RecipeProps{
  recipe: Recipe
}

const RecipeDetails = ({recipe}: RecipeProps ) => {
  return (
    <div>
      <div className={"center"}>
        <img src={recipe.image} alt={"Recipe"} key={recipe.id} width={300} height={300}/>
        <h2>{recipe.name}</h2>
        <div>
          {recipe.explanation}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;