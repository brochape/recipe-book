import React from 'react';
import Recipe, {Ingredient} from "../../models/recipe";
import "./recipeDetails.scss"
import {QuantityKind} from "../../models/quantityKind";

interface RecipeProps{
  recipe: Recipe
}

const RecipeDetails = ({recipe}: RecipeProps ) => {
  function formatQuantity(ingredient: Ingredient) {
    let result = ingredient.quantity + " " + ingredient.unit;
    if(Number.parseInt(ingredient.quantity) > 1 && ingredient.unit !== QuantityKind.unit){
      result += "s"
    }
    return result;
  }
  return (
    <div>
      <div className={"center"}>
        <img id={"image"} src={recipe.image} alt={"Recipe"} key={recipe.id} width={300} height={300}/>
        <h2>{recipe.name}</h2>
        <div id={"ingredient-container"}>
          {recipe.ingredients?.map((ingredient, index) => {
            return <div key={index} className='row' >
              <div className='column bullet right'>
                {formatQuantity(ingredient)}
              </div>
              <div className='column'>
                {ingredient.name}
              </div>
            </div>
          })}
        </div>
        <div>
          {recipe.explanation}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;