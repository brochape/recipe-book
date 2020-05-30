import React from 'react';
import './App.css';
import Header from "./components/header/header";
import RecipeLoader from "./services/recipeLoader";
import {Switch, Route} from 'react-router-dom'
import RecipesOverview from "./components/recipes-overview/recipesOverview";
import RecipeDetails from "./components/recipe-details/recipeDetails";
import NotFound from "./components/not-found/NotFound";
import AddRecipePage from "./components/add-recipe/AddRecipePage";

function App() {
  const recipes = RecipeLoader.loadRecipes();

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={"/"} component={RecipesOverview}/>
        <Route path={"/recipe/:id"}
               component={(routerProps: any) => {
                 let recipe = recipes.find(recipe => recipe.id === parseInt(routerProps.match.params.id));
                 return recipe !== undefined ? RecipeDetails({recipe}) : NotFound()
               }}/>
        <Route path={"/add-recipe"} component={AddRecipePage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
