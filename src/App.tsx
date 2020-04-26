import React from 'react';
import './App.css';
import Header from "./components/header/header";
import RecipeLoader from "./services/recipeLoader";
import RecipesOverview from "./components/recipes-overview/recipesOverview";

function App() {
  const recipes = RecipeLoader.loadRecipes();

  return (
    <div className="App">
      <Header/>
      <div>
          <div>
            <RecipesOverview recipes={recipes}/>
          </div>
      </div>
    </div>
  );
}

export default App;
