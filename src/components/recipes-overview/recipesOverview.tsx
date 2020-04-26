import React from 'react';
import Recipe from "../../models/recipe";

interface OverviewProps{
  recipes: Recipe[]
}

const RecipesOverview = (props: OverviewProps) => {
  return (
    <div>
      {
        props.recipes.map(recipe =>
          <div>
            <img src={recipe.image} alt={"Recipe"} key={recipe.id} width={200} height={200}/>
            <h1>{recipe.name}</h1>
          </div>
        )
      }
    </div>
  );
};

export default RecipesOverview;